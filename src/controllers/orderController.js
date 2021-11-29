const dealClientService = require("../services/dealClientService");
const orderClientService = require("../services/orderClientService");
const OrderService = require("../services/OrderService.js");
const objectOrder = require("../helpers/objectOrder");

class orderController {
  async createOrder(req, res) {
    try {

      const wonDeals = await dealClientService.getWonDeals();

      if (!wonDeals)
        return res.status(404).json({ status: "Error", message: "No Deals" });

      var orderList = await Promise.all(
        wonDeals.map(async (deal) => {
          const orderCreated = await orderClientService.createOrder(deal);

          if (orderCreated[0].erro) {
            return { orderStatus: "disapproved", order: orderCreated[0].erro };
          }

          const { idPedido, numero } = orderCreated[0].pedido;
          const order = await objectOrder.create(deal, idPedido, numero);

          var orderSaved = await OrderService.saveOrder(order);
          if (orderSaved)
            return { orderStatus: "approved", order: orderCreated[0].pedido };

          throw new Error("Error saving order to database");
        })
      );

      return res.status(200).json({ status: "success", orders: orderList });

    } catch (err) {
      return res.status(500).json({ status: "Error", message: err.message });
    }
  }

}

module.exports = new orderController();
