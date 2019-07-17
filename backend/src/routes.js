const express = require ('express');
const multer = require('multer');

const routes = new express.Router();
const StressController = require('./controllers/StressController');
const upload = multer();

routes.get('/', StressController.index);
routes.get('/:id/get', StressController.getStress);
routes.post('/save', upload.single() ,StressController.store);
routes.put('/:id/updateStatus', upload.single('status'), StressController.updateStatus);
routes.put('/:id/put', upload.single(), StressController.upDate);
routes.delete('/:id/delete', StressController.delete);
routes.put('/updateCurrentStatus', upload.single('status'), StressController.updateCurrentStatus);
module.exports = routes;