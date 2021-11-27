const app= require('./app');
const config = require('./config');
// const dbConnect=require

app.listen(config.server.port,()=>{
    console.log(`App listenner in port ${config.server.port}`)
})