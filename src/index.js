
const express = require('express');
const { ServerConfig } =  require('./config');//it will automaticlly import index.js file
const apiRoutes = require('./routes')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
//whenever we get a req from '/api', routes to  apiRoutes
app.use('/api', apiRoutes);

//health checkup of server
app.get('/health', (req, res)=>{
    res.json(
        {
            "Status" : "OK"
        }
    )
})

app.listen(ServerConfig.PORT, ()=>{
    console.log(`Server is listenting at Port ${ServerConfig.PORT}`);
})