const { StatusCodes } = require('http-status-codes');
const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app.error');

const cityRepo = new CityRepository();

async function createCity(data){
    try {
        const city = await cityRepo.create(data);
        return city;
    } catch (error) {
        if(error.name == 'SequelizeValidationError'){
            let explanation = []
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new City', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCities(){
    try {
        const cities = await cityRepo.getAll();
        return cities;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('Cannot find the Cities', StatusCodes.NOT_FOUND);
        }
         throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCity(id){
    try {
        const city = await cityRepo.get(id);
        return city;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError(`Cannot find the city with id ${id}`, StatusCodes.NOT_FOUND);
        }
         throw new AppError(`Cannot fetch data of the city of id ${id}`, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id){
    try {
        const city = await cityRepo.destroy(id);
        return city;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError(`Cannot find the city with id ${id}`, StatusCodes.NOT_FOUND);
        }
         throw new AppError(`Cannot fetch data of the city of id ${id}`, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(id, data) {
    try {
        const updated = await cityRepo.update(id, data);
        return updated;
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const explanation = error.errors.map(err => err.message);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot update city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createCity,
    getCities,
    getCity,
    destroyCity,
    updateCity
}