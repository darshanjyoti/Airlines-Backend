const { StatusCodes } = require("http-status-codes")
const { ErrorResponse } = require('../utils/common');
const AppError = require("../utils/errors/app.error");

const validateCreateRequest = (req, res, next)=>{
    if(!req.body.modelNumber){
        ErrorResponse.message = "Something went wrong while creating an airplane";
        ErrorResponse.error = new AppError(["Model number not fount in incoming request in correct format"], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest
}