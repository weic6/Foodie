package com.example.foodie.model;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class MenuItem {
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private String imageUrl;
    private String category;
    
    // Add explicit getters for name and price
    public String getName() {
        return name;
    }
    
    public BigDecimal getPrice() {
        return price;
    }
} 