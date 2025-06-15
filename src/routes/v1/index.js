const express = require('express');
const  AirplaneRoute = require('./airplane.route')
const router = express.Router();

router.use('/airplanes', AirplaneRoute)

module.exports = router