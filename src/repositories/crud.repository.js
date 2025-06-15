const { where } = require('sequelize');
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
            return response;
    }

    async get(data){
            const response = await this.model.findByPk(data);
            return response;
    }

    async getAll(){
            const response = await this.model.findAll();
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