const express = require('express');
const router = express.Router();
const Product = require('../controllers/product.controller');
const verifyToken = require('../helpers/verifyToken');

//TEST
const auth = require('../middleware/auth');

//*****************Product Routers ********************/
router.post('/product', Product.create);
router.get('/product', Product.findAll);
router.get('/product/:id', Product.findOne);
router.post('/product/:id', Product.updateOne);
router.delete('/product/:id', Product.deleteOne);

module.exports = router;