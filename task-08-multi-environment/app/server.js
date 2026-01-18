const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';
const DB_HOST = process.env.DB_HOST || 'localhost';

app.get('/', (req, res) => {
    res.json({
        environment: ENV,
        database: DB_HOST,
        debug: process.env.DEBUG === 'true',
        version: '1.0.0'
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy', environment: ENV });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running in ${ENV} mode on port ${PORT}`);
});
