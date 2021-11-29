const mongoose = require('mongoose');
const config = require('../config');

class configMongoDB{

    async connect(){
        try{
        await mongoose.connect(config.mongo.urlConnection,
            { 
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        
        console.log('Conected with MongoDB')
        }catch(err){
            console.log('Connection error :'+err)
        }
    }
}

module.exports=new configMongoDB();