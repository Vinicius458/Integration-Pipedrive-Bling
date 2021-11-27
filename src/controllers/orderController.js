const dealClientService=require('../services/dealClientService');
const xmlConvert=require('../helpers/xmlConvertOrder')
const orderClientService=require('../services/orderClientService')

class orderController{

async createOrder(req,res){
try{
   const wonDeals=await dealClientService.getWonDeals();

   if(!wonDeals)
   return res.status(404).json({message:'No Deals'})

   // return res.status(200).json(wonDeals)


   var orderList=await wonDeals.map(deal=>{
      // console.log(deal)
      const Deal={
      id_deal:deal.id,
     customer_name:deal.person_id.name,
     org_name:deal.org_id.name,
     deal_title:deal.title,
     value:deal.value,
     currency:deal.currency,
     date:deal.update_time,
      }

      orderClientService.createOrder(deal);
      // const list= xmlConvert.createXmlOrder(deal);

     

       
   })
  
// console.log(orderPromise)
   // return res.send('gerando')
   return res.status(200).json(wonDeals)
}catch(err){
     return res.send(err)
}

}

}

module.exports=new orderController();


