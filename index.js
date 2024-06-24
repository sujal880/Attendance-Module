const express=require('express');
const allroutes = require('./app');
require('./config/db');
require('dotenv').config();
const PORT=process.config.SERVER | 4000;
const app=express();
app.use(express.json());
app.use(allroutes);
app.listen(PORT,()=>{
    console.log("Server is Running on PORT"+PORT);
})