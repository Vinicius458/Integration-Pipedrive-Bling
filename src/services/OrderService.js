const Order = require("../models/orderModel");

class OrderService {
  async saveOrder(order) {
    try {  
      await Order.create(order);
      
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = new OrderService();
