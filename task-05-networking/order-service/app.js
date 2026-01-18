const express = require('express');
const app = express();
const PORT = 8082;

app.use(express.json());

const orders = [
    { id: 1, userId: 1, product: 'Laptop', amount: 999.99, status: 'Delivered' },
    { id: 2, userId: 2, product: 'Mouse', amount: 29.99, status: 'Shipped' },
    { id: 3, userId: 1, product: 'Keyboard', amount: 79.99, status: 'Processing' }
];

app.get('/orders', (req, res) => {
    res.json({ orders, service: 'order-service' });
});

app.get('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Order Service running on port ${PORT}`);
});
