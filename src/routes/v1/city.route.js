const express = require('express');
const { CityController } = require('../../controllers')
const { CityMiddleware } = require('../../middlewares')

const router = express.Router();

// /api/v1/airplanes
router.post('/', CityMiddleware.validateCreateRequest, CityController.createCity);
router.get('/', CityController.getCities);
router.get('/:id', CityController.getCity);
router.delete('/:id', CityController.destroyCity);
// PATCH /api/v1/airplanes/:id
router.patch('/:id', CityController.updateCity);
module.exports = router