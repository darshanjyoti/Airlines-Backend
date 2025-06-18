const express = require('express');
const  AirplaneRoute = require('./airplane.route')
const CityRoute = require('./city.route')
const router = express.Router();

router.use('/airplanes', AirplaneRoute)
router.use('/cities', CityRoute)

module.exports = router