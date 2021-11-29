const mongoose = require('mongoose');

const customer = new mongoose.Schema(
{
    customer_name: String,
    custumer_phone:String,
    custumer_email:String,
    custumer_org:String
}
);

const item = new mongoose.Schema(
    {
    description:String,
    un:String,
    amount:Number,
    value:Number,
    currency:String
    }
);

const OrderSchema = new mongoose.Schema(
	{
		order_id: {
			type: String,
			unique: true,
			required: true
		},
        order_numberBling:{
            type: String,
			unique: true,
			required: true
        },
		order_date: {
			type: Date,
			default: Date.now
		},
		customer: customer,
		item: item,
		status: String
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Orders', OrderSchema);