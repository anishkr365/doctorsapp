const mongoose = require('mongoose')
 mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
 const db = mongoose.connection;
 db.once('connected', ()=>{console.log('MongoDB is connected')})
 db.on('error',(error)=>{
    console.log('error in connection', error)
 })
 module.exports  =db;

