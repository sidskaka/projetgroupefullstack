const express = require('express');
const router = express.Router();
<<<<<<< HEAD
// const employe = require('../controllers/employe.controller');
//const gestionnaire = require('../controllers/gestionnaire.controller');
=======
>>>>>>> b92c13f8a6616cd44362a14bc0da3126b9a5e78e
const Product = require('../controllers/product.controller');
const verifyToken = require('../helpers/verifyToken');

//TEST
const auth = require('../middleware/auth');

<<<<<<< HEAD
//*******************employe Routers**************/
// router.post('/employe', employe.create);
// router.get('/employe', employe.findAll);
// router.get('/employe/:id', employe.findOne);
// router.post('/employe/:id', employe.updateOne);
// router.put('/employe/:id', employe.updateOne);
// router.delete('/employe/:id', employe.deleteOne);

//*******************gestionnaire Routers**************/
/*router.post('/gestionnaire', gestionnaire.create);
router.get('/gestionnaire', gestionnaire.findAll);
router.get('/gestionnaire/:id', gestionnaire.findOne);
router.post('/gestionnaire/:id', gestionnaire.updateOne);
router.put('/gestionnaire/:id', gestionnaire.updateOne);
router.delete('/gestionnaire/:id', gestionnaire.deleteOne);*/

=======
>>>>>>> b92c13f8a6616cd44362a14bc0da3126b9a5e78e
//*****************Product Routers ********************/
router.post('/product', Product.create);
router.get('/products', Product.findAll);
router.get('/product/:id', Product.findOne);
router.post('/product/:id', Product.updateOne);
router.delete('/product/:id', Product.deleteOne);

module.exports = router;