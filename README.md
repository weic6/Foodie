# Foodie

## Overview

Foodie is a minimal full-stack food ordering app built with Spring Boot (backend) and React (frontend). The system allows users to browse menu items, add them to a cart, place orders, and view order history. It uses MySQL for data persistence and Redis for caching and session management.

## How to Use

- Start redis server: `redis-server`
- Start backend server: `cd backend & mvn clean install & mvn spring-boot:run`

  - A database "foodie" will be created automatically if it doesn't exist
  - Tables will be created and populated with sample data

- Start frontend: `cd frontend & npm install & npm start`
- Access the app in browser: `http://localhost:3000`

<!-- Todo: -->
<!-- ## Key Features
- **Menu Management** : Browse and filter food items by category
- **Shopping Cart** : Add/remove items with quantity management
- **Order Processing** : Submit orders with calculated totals
- **Order History** : View past orders with complete details
- **Caching** : Redis-backed performance optimization -->
