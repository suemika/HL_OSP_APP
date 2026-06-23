package com.pansoft.lcdp.config;

import com.efounder.util.OSPFilterOrderConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.servlet.Filter;

/**
 * @ClassName FlowDriverConfig
 * @Description 流程相关过滤器
 * @date 2022/11/17 17:14
 */
@Configuration
public class FlowDriverConfig {

    private static final Logger logger = LoggerFactory.getLogger(FlowDriverConfig.class);
    @Bean
    @ConditionalOnExpression("#{'true'.equals('${osp.FlowLocalThreadCacheFilter.enabled:false}')}")
    public FilterRegistrationBean localThreadCacheFilter() throws ClassNotFoundException {
        Filter filter = null;
        try {
            filter = (Filter)Class.forName("com.efounder.bz.filter.FlowLocalThreadCacheFilter").newInstance();
        } catch (Exception e){
            logger.error("com.efounder.bz.filter.FlowLocalThreadCacheFilter 过滤器 Not found");
            throw new ClassNotFoundException("com.efounder.bz.filter.FlowLocalThreadCacheFilter 过滤器 Not found");
        }
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.addUrlPatterns("/*");
        registration.setFilter(filter);
        registration.setName("FlowLocalThreadCacheFilter");
        registration.setOrder(OSPFilterOrderConstants.FlowLocalThreadCacheFilter_order);
        return registration ;
    }



    @Bean
    @ConditionalOnExpression("#{'true'.equals('${osp.FlowRestApiAuthFilter.enabled:false}')}")
    public FilterRegistrationBean flowRestApiAuthFilter() throws ClassNotFoundException {
        Filter filter = null;
        try {
            filter = (Filter)Class.forName("com.efounder.bz.filter.FlowRestApiAuthFilter").newInstance();
        } catch (Exception e){
            logger.error("com.efounder.bz.filter.FlowRestApiAuthFilter 过滤器 Not found");
            throw new ClassNotFoundException("com.efounder.bz.filter.FlowRestApiAuthFilter 过滤器 Not found");
        }
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.addUrlPatterns("/rest/*");
        registration.setFilter(filter);
        registration.setName("FlowRestApiAuthFilter");
        registration.setOrder(OSPFilterOrderConstants.FlowRestApiAuthFilter_order);
        return registration ;
    }

    @Bean
    @ConditionalOnExpression("#{'true'.equals('${osp.FlowApprovalInfoFilter.enabled:false}')}")
    public FilterRegistrationBean flowApprovalInfoFilter() throws ClassNotFoundException {
        Filter filter = null;
        try {
            filter = (Filter)Class.forName("com.efounder.bz.filter.approvalinfo.FlowApprovalInfoFilter").newInstance();
        } catch (Exception e){
            logger.error("com.efounder.bz.filter.approvalinfo.FlowApprovalInfoFilter 过滤器 Not found");
            throw new ClassNotFoundException("com.efounder.bz.filter.approvalinfo.FlowApprovalInfoFilter 过滤器 Not found");
        }
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.addUrlPatterns("/*");
        registration.setFilter(filter);
        registration.setName("FlowApprovalInfoFilter");
        registration.setOrder(OSPFilterOrderConstants.FlowApprovalInfoFilter_order);
        return registration ;
    }

}
