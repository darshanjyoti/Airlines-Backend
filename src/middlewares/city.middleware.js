const { StatusCodes } = require("http-status-codes")
const { ErrorResponse } = require('../utils/common');
const AppError = require("../utils/errors/app.error");

const validateCreateRequest = (req, res, next)=>{
    if( !req.body || !req.body.name){
        ErrorResponse.message = "Something went wrong while creating a city";
        ErrorResponse.error = new AppError(["Name not fount in incoming request in correct format"], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest
}