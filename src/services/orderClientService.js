const config = require("../config");
const axios = require("axios");
const xmlConvert=require('../helpers/xmlConvertOrder');

const blingUrl = config.integrations.bling.url;
const keyBling = config.integrations.bling.key;

class orderClientService {
  async createOrder(deal) {
      try {
          var dealXml=await xmlConvert.createXmlOrder(deal)

           const { data } =await axios
             .post(`${blingUrl}/pedido/json?apikey=${keyBling}&xml=${encodeURIComponent(dealXml)}`)
          
              var orderData=(data.retorno.pedidos==undefined?data.retorno.erros:data.retorno.pedidos);

           return orderData;
      } catch (err) {
          return
      }
  }
}
  
  module.exports=new orderClientService();
  