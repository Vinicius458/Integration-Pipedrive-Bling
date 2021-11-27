const config = require("../config");
const axios = require("axios");
const xmlConvert=require('../helpers/xmlConvertOrder');

const blingUrl = config.integrations.bling.url;
const keyBling = config.integrations.bling.key;

class orderClientService {
    async createOrder(deal) {
      try {
           var dealXml=await xmlConvert.createXmlOrder(deal)
           console.log(dealXml)
        const { data } = await axios
             .post(`${blingUrl}/pedido/json?apikey=${keyBling}&xml=${encodeURIComponent(dealXml)}`);
  console.log("Deu Certo")
             console.log(data.retorno.pedidos==undefined?data.retorno.erros:data.retorno.pedidos)
            //  return data.data;
      } catch (err) {
        console.log("Erro")
          console.log(err);
          return
      }
    }
  }
  
  module.exports=new orderClientService();
  