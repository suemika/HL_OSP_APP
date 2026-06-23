package com.pansoft.lcdp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import java.io.IOException;

/**
 * osp标准应用启动类
 *
 * @author lfc
 * @version 6.5
 * @since 2021-09-10
 */
@SpringBootApplication
public class OSPApplication extends SpringBootServletInitializer {

    public static void main(String[] args) throws IOException {

        SpringApplication.run(OSPApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {

        return builder.sources(OSPApplication.class);
    }
}
