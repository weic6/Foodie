package com.example.foodie.controller;

import com.example.foodie.model.MenuItem;
import com.example.foodie.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {
    
    private final MenuService menuService;
    
    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }
    
    @GetMapping
    public List<MenuItem> getAllMenuItems() {
        return menuService.getAllMenuItems();
    }
    
    @GetMapping("/{id}")
    public MenuItem getMenuItemById(@PathVariable Long id) {
        return menuService.getMenuItemById(id);
    }
    
    @GetMapping("/category/{category}")
    public List<MenuItem> getMenuItemsByCategory(@PathVariable String category) {
        return menuService.getMenuItemsByCategory(category);
    }
} 