const { Router } = require('express');;
const orderController=require('./controllers/orderController');
const getOrdersController=require('./controllers/getOrdersController');

const routes=new Router();

routes
.get('/orders',getOrdersController.index)
.post('/orders',orderController.createOrder)

module.exports=routes;