const { Router } = require('express');
const { post } = require('./app');
const orderController=require('./controllers/orderController')

const routes=new Router();

routes
.get('/',(req,res)=>res.redirect('/orders'))
.post('/orders',orderController.createOrder)

module.exports=routes;