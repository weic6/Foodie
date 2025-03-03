package com.example.foodie;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.foodie.repository")
public class FoodieApplication {
    public static void main(String[] args) {
        SpringApplication.run(FoodieApplication.class, args);
    }
} 