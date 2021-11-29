class objectOrder{

    async create(deal,idPedido,numero){
        const order={
            order_id:idPedido,
            order_numberBling:numero,
            order_date:deal.update_time || new Date,
            owner_name:deal.owner_name,
            custumer:{
             customer_name:deal.person_id.name,
             custumer_phone:deal.person_id.phone.value,
             custumer_email:deal.person_id.email.value,
             custumer_org:deal.org_id.name
            },
            item:{
                description:deal.title,
                un:'un',
                amount:1,
                value:deal.value,
                currency:deal.currency
             },
             status:'won'
             }
    
             return order;
    }
}

module.exports=new objectOrder()