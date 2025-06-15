const { where } = require('sequelize');
//const { Logger } = require('../config/logger.config')

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            console.log("inside create of crudrepo", data)
            const response = await this.model.create(data);
            console.log(response)
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async destroy(data){
        try {
            const response = await this.model.destroy({
                where:{
                    id : data
                }
            });
            return response;
        } catch (error) {
           // Logger.error("Error in Deleting the model");
            throw error;
        }
    }

    async get(data){
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
           // Logger.error("Error in Getting the data");
            throw error;
        }
    }

    async get(){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
          //  Logger.error("Error in Getting all the data");
            throw error;
        }
    }

    async update(id, data){
        try {
            const response = await this.model.update(data,{
                id: id
            });
            return response;
        } catch (error) {
           // Logger.error("Error in Updating the data");
            throw error;
        }
    }
}

module.exports = CrudRepository