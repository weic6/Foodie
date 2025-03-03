package com.example.foodie.repository;

import com.example.foodie.model.MenuItem;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface MenuItemMapper {
    List<MenuItem> findAll();
    MenuItem findById(Long id);
    List<MenuItem> findByCategory(String category);
} 