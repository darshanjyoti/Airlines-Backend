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

const getAirplanes = async (req, res)=>{
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error;
        res.status(error.statusCode).json(ErrorResponse)
    }
}

const getAirplane = async (req, res)=>{
    try {
        const airplanes = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error;
        res.status(error.statusCode).json(ErrorResponse)
    }
}


module.exports = {createAirplane, getAirplanes, getAirplane}