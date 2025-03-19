const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for users
let users = [];
let nextId = 1;

// Create a new user
app.post('/users', (req, res) => {
    try {
        const { name, email, age } = req.body;
        
        // Validate input
        if (!name || !email || !age) {
            return res.status(400).json({ error: 'Name, email and age are required' });
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        // Create new user
        const newUser = {
            id: nextId++,
            name,
            email,
            age
        };
        
        users.push(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get user by ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
});

// Update user
app.put('/users/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, email, age } = req.body;
        const userIndex = users.findIndex(u => u.id === id);
        
        if (userIndex === -1) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        // Validate input
        if (!name || !email || !age) {
            return res.status(400).json({ error: 'Name, email and age are required' });
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        // Update user
        users[userIndex] = {
            id,
            name,
            email,
            age
        };
        
        res.json(users[userIndex]);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete user
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    users.splice(userIndex, 1);
    res.status(204).send();
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


