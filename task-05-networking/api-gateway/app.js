const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8080;

app.use(express.json());

// Service URLs (using container names for service discovery)
const USER_SERVICE = process.env.USER_SERVICE_URL || 'http://user-service:8081';
const ORDER_SERVICE = process.env.ORDER_SERVICE_URL || 'http://order-service:8082';

app.get('/', (req, res) => {
    res.json({
        message: 'API Gateway',
        services: {
            users: '/users',
            orders: '/orders'
        }
    });
});

// Proxy to user service
app.get('/users', async (req, res) => {
    try {
        const response = await axios.get(`${USER_SERVICE}/users`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'User service unavailable', details: error.message });
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const response = await axios.get(`${USER_SERVICE}/users/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            error: 'User service error',
            details: error.message
        });
    }
});

// Proxy to order service
app.get('/orders', async (req, res) => {
    try {
        const response = await axios.get(`${ORDER_SERVICE}/orders`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Order service unavailable', details: error.message });
    }
});

app.get('/orders/:id', async (req, res) => {
    try {
        const response = await axios.get(`${ORDER_SERVICE}/orders/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            error: 'Order service error',
            details: error.message
        });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`API Gateway running on port ${PORT}`);
});
