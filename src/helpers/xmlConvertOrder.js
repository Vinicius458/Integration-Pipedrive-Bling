const xml = require("js2xmlparser");
const moment=require('moment') 

class xmlConvertOrder{

    async createXmlOrder(deal){
        var obj = { 
            vendedor:deal.user_id.name,
            cliente: {
            nome:deal.person_id.name,
            fone:deal.person_id.email,
            email:deal.person_id.phone
            },
            itens:{
                item:{
                    codigo:deal.id,
                    descricao:deal.title,
                    un:'un',
                    qtde:deal.products_count,
                    vlr_unit:deal.value,
                }
            },
            obs:'Pedido realizado'
        };

        try{
          var orders=await xml.parse('pedido',obj);
          console.log(orders)
            return orders
        }catch(err){
           throw err
        }
    }
    
}

module.exports=new xmlConvertOrder();


