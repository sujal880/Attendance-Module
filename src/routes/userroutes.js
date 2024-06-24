const express=require('express');
const signup = require('../controllers/signupcontroller');
const signin = require('../controllers/signincontroller');
const verifytoken = require('../controllers/verifytokencontroller');
const routes=express.Router();
routes.post('/signup',signup);
routes.post('/signin',signin);
module.exports=routes;