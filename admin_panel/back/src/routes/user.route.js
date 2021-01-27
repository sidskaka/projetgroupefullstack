const express = require('express');
const router = express.Router();
// const employe = require('../controllers/employe.controller');
const gestionnaire = require('../controllers/gestionnaire.controller');
const BU = require('../controllers/BU.controller');
// const responsable = require('../controllers/Responsable.controller');
const verifyToken = require('../helpers/verifyToken');

//TEST
const auth = require('../middleware/auth');

//*******************employe Routers**************/
// router.post('/employe', employe.create);
// router.get('/employe', employe.findAll);
// router.get('/employe/:id', employe.findOne);
// router.post('/employe/:id', employe.updateOne);
// router.put('/employe/:id', employe.updateOne);
// router.delete('/employe/:id', employe.deleteOne);

//*******************gestionnaire Routers**************/
router.post('/gestionnaire', gestionnaire.create);
router.get('/gestionnaire', gestionnaire.findAll);
router.get('/gestionnaire/:id', gestionnaire.findOne);
router.post('/gestionnaire/:id', gestionnaire.updateOne);
router.put('/gestionnaire/:id', gestionnaire.updateOne);
router.delete('/gestionnaire/:id', gestionnaire.deleteOne);

//*****************BU Routers ********************/
router.post('/BU', BU.create);
router.get('/BU', BU.findAll);
router.get('/BU/:id', BU.findOne);
router.post('/BU/:id', BU.updateOne);
router.delete('/BU/:id', BU.deleteOne)

//****************Responsable Routers ***********/
// router.post('/responsable', responsable.create);
// router.get('/responsable', responsable.findAll);
// router.get('/responsable/:id', responsable.findOne);
// router.post('/responsable/:id', responsable.updateOne);
// router.delete('/responsable/:id', responsable.deleteOne);

module.exports = router;