package com.example.foodie.service;

import com.example.foodie.model.MenuItem;
import com.example.foodie.repository.MenuItemMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {
    
    private final MenuItemMapper menuItemMapper;
    
    @Autowired
    public MenuService(MenuItemMapper menuItemMapper) {
        this.menuItemMapper = menuItemMapper;
    }
    
    @Cacheable(value = "menuItems")
    public List<MenuItem> getAllMenuItems() {
        return menuItemMapper.findAll();
    }
    
    @Cacheable(value = "menuItems", key = "#id")
    public MenuItem getMenuItemById(Long id) {
        return menuItemMapper.findById(id);
    }
    
    @Cacheable(value = "menuItemsByCategory", key = "#category")
    public List<MenuItem> getMenuItemsByCategory(String category) {
        return menuItemMapper.findByCategory(category);
    }
} 