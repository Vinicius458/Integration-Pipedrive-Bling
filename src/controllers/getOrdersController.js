const joi = require('joi');
const Order=require('../models/orderModel');

const pagination=joi.object({
    page: joi.number()
        .positive()
        .min(1)
        .default(1),
    perPage: joi.number()
        .positive()
        .min(1)
        .max(100)
        .default(10)
})

class getOrdersController{ 
 
    async index(req,res){
        try{

        const { value, error } =await pagination.validate(req.query, { convert: true, abortEarly: false });

        if (error) 
			throw Object.assign(
				new Error('Invalid Query'),
				{ status: 400 }
			);

            const { page, perPage } = value;

            const totalOrders=await Order.countDocuments({});

            const orders=await Order.find({})
			.sort({ _id: 1 })
			.skip(page - 1)
			.limit(perPage)

            return res.status(200)
            .json({
                page,
                perPage,
                totalOrders,
                orders
            })

        }catch(err){
            res.status(err.status).json({message:err.message})
        }
    }
}

module.exports=new getOrdersController();