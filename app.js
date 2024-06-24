const express=require('express');
const routes = require('./src/routes/userroutes');
const allroutes=express.Router();

allroutes.use('/attendance',routes);

module.exports=allroutes;