const { StatusCodes } = require('http-status-codes')
const {AirplaneService} = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

/*
    POST ('/airplanes')
    REQBODY: {modelNumber : string, capacity: number}

*/
const createAirplane = async (req, res) => {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity: req.body.capacity
        })
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.error = error;
        res.status(error.statusCode).json(ErrorResponse) //error.statusCode this is coming from service layer
    }
}


module.exports = {createAirplane}