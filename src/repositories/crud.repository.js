const { where } = require('sequelize');
const AppError = require('../utils/errors/app.error');
const { StatusCodes } = require('http-status-codes');
//const { Logger } = require('../config/logger.config')

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
            const response = await this.model.create(data);
            console.log(response)
            return response;
    }

    async destroy(data){
            const response = await this.model.destroy({
                where:{
                    id : data
                }
            });
            if(!response){
                throw new AppError("Can not find the resource", StatusCodes.NOT_FOUND)
            }
            return response;
    }

    async get(data){
            const response = await this.model.findByPk(data);
            if(!response){
                throw new AppError("Can not find the resource", StatusCodes.NOT_FOUND)
            }
            return response;
    }

    async getAll(){
            const response = await this.model.findAll();
            if(!response){
                throw new AppError("Can not find the resources", StatusCodes.NOT_FOUND)
            }
            return response;
    }

    async update(id, data){
            const response = await this.model.update(data,{
                id: id
            });
            return response;
    }
}

module.exports = CrudRepository