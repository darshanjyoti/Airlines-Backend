const { StatusCodes } = require('http-status-codes')
const { CityService} = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

/*
    POST ('/cities')
    REQBODY: {name : string}

*/
const createCity = async (req, res) => {
    try {
            const city = await CityService.createCity({
            name : req.body.name
        })
        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.error = error;
        res.status(error.statusCode).json(ErrorResponse) //error.statusCode this is coming from service layer
    }
}

const getCities = async (req, res)=>{
    try {
        const cities = await CityService.getCities();
        SuccessResponse.data = cities;
        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error;
        res.status(error.statusCode).json(ErrorResponse)
    }
}

const getCity = async (req, res)=>{
    try {
        const city = await CityService.getCity(req.params.id);
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error;
        res.status(error.statusCode).json(ErrorResponse)
    }
}

const destroyCity = async (req, res)=>{
    try {
        const city = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error;
        res.status(error.statusCode).json(ErrorResponse)
    }
}

const updateCity = async (req, res) => {
    try {
        const city = await CityService.updateCity(req.params.id, req.body);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully updated the City",
            data: city,
            error: {}
        });
    } catch (error) {
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message || "Failed to update city",
            data: {},
            error: error.explanation || {}
        });
    }
};

module.exports = {
    createCity,
    getCities,
    getCity,
    destroyCity,
    updateCity
}