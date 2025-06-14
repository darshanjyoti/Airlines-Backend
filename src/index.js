
const express = require('express');
const { PORT } =  require('./config');//it will automaticlly import index.js file
const apiRoutes = require('./routes')

const app = express();

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

app.listen(PORT, ()=>{
    console.log(`Server is listenting at Port ${PORT}`);
})