const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(express.json());

// Product data
const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 29.99, category: 'Electronics' },
    { id: 3, name: 'Keyboard', price: 79.99, category: 'Electronics' },
    { id: 4, name: 'Monitor', price: 299.99, category: 'Electronics' },
    { id: 5, name: 'Desk Chair', price: 199.99, category: 'Furniture' }
];

app.get('/', (req, res) => {
    res.json({
        message: 'Product API',
        version: '1.0.0',
        endpoints: ['/api/products', '/api/products/:id', '/health']
    });
});

app.get('/api/products', (req, res) => {
    const { category } = req.query;

    if (category) {
        const filtered = products.filter(p =>
            p.category.toLowerCase() === category.toLowerCase()
        );
        return res.json({ products: filtered, count: filtered.length });
    }

    res.json({ products, count: products.length });
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));

    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Product API running on port ${PORT}`);
});

module.exports = app;
