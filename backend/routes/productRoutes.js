const express = require('express');
const router = express.Router();

// Sample Products
const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
];

// Get all products
router.get('/', (req, res) => {
    res.json(products);
});

// Get product by ID
router.get('/:id', (req, res) => {
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

module.exports = router;
