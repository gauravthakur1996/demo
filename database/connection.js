const mongoose = require('mongoose');


module.exports = async ()=>{
 try{
    await mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});
    console.log('Database Connected...')
 }catch(error){
    console.log('Database Connectivity error...', error)

    throw new Error(error);
 }
}