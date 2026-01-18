const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

const users = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'User' }
];

app.get('/users', (req, res) => {
    res.json({ users, service: 'user-service' });
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`User Service running on port ${PORT}`);
});
