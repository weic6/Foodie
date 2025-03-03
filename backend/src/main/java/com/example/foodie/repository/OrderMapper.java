package com.example.foodie.repository;

import com.example.foodie.model.Order;
import com.example.foodie.model.OrderItem;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface OrderMapper {
    void insertOrder(Order order);
    void insertOrderItem(OrderItem orderItem);
    List<Order> findByUserId(Long userId);
    Order findById(Long id);
} 