package com.pansoft.lcdp.interceptor;

import com.efounder.spring.onlineservice.ScriptServiceInterceptor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import com.efounder.spring.commquery.QueryInterceptor;
import javax.annotation.Resource;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * 配置注入拦截器
 *
 * @Author: xiewanzhi
 * @Date: 2020-02-2020/2/26 01:47
 * @Version: 1.0
 */
@Configuration
public class InterceptorConfig extends WebMvcConfigurationSupport {

    @Resource
    private QueryInterceptor queryInterceptor;

    @Resource
    private ScriptServiceInterceptor serviceInterceptor;

    @Value("${osp.banCached-page:/index.html,/application.html}")
    private String[] banCachedPage;

    @Value("${osp.authentication.login-page:/developer.html}")
    private String loginPage;

    private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {
            "classpath:/META-INF/resources/", "classpath:/resources/",
            "classpath:/static/", "classpath:/public/"};
    @Override
    protected void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(queryInterceptor).addPathPatterns("/excuteQuery/**");
        registry.addInterceptor(serviceInterceptor).addPathPatterns("/scriptservice/**");
        super.addInterceptors(registry);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 默认开放CLASSPATH_RESOURCE_LOCATIONS和webjars
        if (!registry.hasMappingForPattern("/webjars/**")) {
            registry.addResourceHandler("/webjars/**").addResourceLocations(
                    "classpath:/META-INF/resources/webjars/");
        }
        if (!registry.hasMappingForPattern("/**")) {
            // 对静态资源设置缓存 add by wangyuge 2021-05-18
            registry.addResourceHandler("/**").addResourceLocations("classpath:/static/").setCacheControl(CacheControl.maxAge(604800, TimeUnit.SECONDS));

            // index.html不缓存，防止对接身份认证平台（4A/IAM）后，出现循环刷新index.html的问题 by lfc 2021-05-26
            // 根据配置设置banCachedPage不缓存，防止对接身份认证平台（4A/IAM）后，出现循环刷新的问题 modify by tianhaiqiang 2022-08-10
            String [] locations = Arrays.stream(banCachedPage).map(s -> "classpath:/static" + s).toArray(String[]::new);
            registry.addResourceHandler(banCachedPage).addResourceLocations(locations).setCacheControl(CacheControl.maxAge(0, TimeUnit.SECONDS));
        }
        if (!registry.hasMappingForPattern("/**")) {
            registry.addResourceHandler("/**").addResourceLocations(CLASSPATH_RESOURCE_LOCATIONS);
        }

        super.addResourceHandlers(registry);
    }

    @Override
    protected void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        super.configureMessageConverters(converters);
    }

    /**
     * 配置controller的返回值乱码的问题
     *
     * @return
     */
    @Bean
    public HttpMessageConverter responseBodyConverter() {
        StringHttpMessageConverter converter = new StringHttpMessageConverter();
        converter.setDefaultCharset(Charset.forName("UTF-8"));
        return converter;
    }

    /** 
     * 无需控制器的页面跳转
     *
     * @param registry 
     */
    @Override
    protected void addViewControllers(ViewControllerRegistry registry) {
        // 解决登录后不带html的请求重定向到404页面的问题 add by tianhaiqiang 2022.09.05
        if ((loginPage != null) && (!loginPage.equals(""))) {
            if (loginPage.startsWith("/")) {
                registry.addViewController("/").setViewName("redirect:" + loginPage);
            } else {
                registry.addViewController("/").setViewName("redirect:/" + loginPage);
            }
        }
    }
}
