package org.example.red;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.filter.ShallowEtagHeaderFilter;
import jakarta.servlet.Filter;

@SpringBootApplication
public class RedApplication {

    public static void main(String[] args) {
        SpringApplication.run(RedApplication.class, args);
    }

}

