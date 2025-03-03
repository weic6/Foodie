-- Insert sample users
INSERT INTO users (username, password, email, role) VALUES
('john', '$2a$10$Ht0J1a9YCiJJ3TAerzfCpuhDL2Xd0QdHYQ9R4c9a9oHWXjsMv4ofi', 'john@example.com', 'USER');

-- Insert sample menu items
INSERT INTO menu_items (name, description, price, image_url, category) VALUES
('Margherita Pizza', 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil', 12.99, 'https://via.placeholder.com/300', 'PIZZA'),
('Pepperoni Pizza', 'Pizza with tomato sauce, mozzarella cheese, and pepperoni', 14.99, 'https://via.placeholder.com/300', 'PIZZA'),
('Caesar Salad', 'Romaine lettuce, croutons, parmesan cheese, and Caesar dressing', 8.99, 'https://via.placeholder.com/300', 'SALAD'),
('Spaghetti Carbonara', 'Spaghetti pasta with egg, cheese, pancetta, and black pepper', 13.99, 'https://via.placeholder.com/300', 'PASTA'),
('Cheeseburger', 'Beef patty with cheese, lettuce, tomato, and special sauce', 10.99, 'https://via.placeholder.com/300', 'BURGER'),
('Chocolate Cake', 'Rich chocolate cake with chocolate frosting', 6.99, 'https://via.placeholder.com/300', 'DESSERT'); 