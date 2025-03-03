package com.example.foodie.repository;

import com.example.foodie.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserMapper {
    User findByUsername(String username);
    User findById(Long id);
    void insert(User user);
} 