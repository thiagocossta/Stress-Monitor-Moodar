const express = require ('express');
const multer = require('multer');

const routes = new express.Router();
const StressController = require('./controllers/StressController');
const upload = multer();

routes.get('/', StressController.index);
routes.post('/stresses', upload.single() ,StressController.store);
routes.put('/:id/updateStatus', upload.single('status'), StressController.updateStatus);
routes.put('/:id/put', upload.single(), StressController.upDate);
routes.delete('/:id/delete', StressController.delete);

module.exports = routes;