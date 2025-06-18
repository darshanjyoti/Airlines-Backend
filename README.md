

How to integrate ORM/Sequelize:
1. npm install --save sequelize
2. npm install --save mysql2 [For MySQL Database]
3. We will use sequelize-cli for project bootstrapping.
4. Inside Src Folder [cd src] Initialize sequelize project : npx sequelize init 
5. Create a table: npx sequelize model:generate --name City --attributes name:string 
6. npx sequelize db:create [Skip it when we execute step5]
6. npx sequelize db:migrate