package com.example.foodie.service;

import com.example.foodie.model.MenuItem;
import com.example.foodie.model.Order;
import com.example.foodie.model.OrderItem;
import com.example.foodie.repository.MenuItemMapper;
import com.example.foodie.repository.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class OrderService {
    
    private final OrderMapper orderMapper;
    private final MenuItemMapper menuItemMapper;
    
    @Autowired
    public OrderService(OrderMapper orderMapper, MenuItemMapper menuItemMapper) {
        this.orderMapper = orderMapper;
        this.menuItemMapper = menuItemMapper;
    }
    
    @Transactional
    public Order createOrder(Order order) {
        orderMapper.insertOrder(order);
        
        if (order.getItems() != null) {
            for (OrderItem item : order.getItems()) {
                MenuItem menuItem = menuItemMapper.findById(item.getMenuItemId());
                if (menuItem != null) {
                    item.setMenuItemName(menuItem.getName());
                    item.setPrice(menuItem.getPrice());
                }
                item.setOrderId(order.getId());
                orderMapper.insertOrderItem(item);
            }
        }
        
        return order;
    }
    
    public List<Order> getOrdersByUserId(Long userId) {
        return orderMapper.findByUserId(userId);
    }
    
    public Order getOrderById(Long id) {
        return orderMapper.findById(id);
    }
} 