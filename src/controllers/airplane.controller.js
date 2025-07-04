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

const destroyAirplane = async (req, res)=>{
    try {
        const airplane = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error;
        res.status(error.statusCode).json(ErrorResponse)
    }
}

const updateAirplane = async (req, res) => {
    try {
        const airplane = await AirplaneService.updateAirplane(req.params.id, req.body);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully updated the airplane",
            data: airplane,
            error: {}
        });
    } catch (error) {
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message || "Failed to update airplane",
            data: {},
            error: error.explanation || {}
        });
    }
};


module.exports = {createAirplane, getAirplanes, getAirplane, destroyAirplane, updateAirplane}