const mongoose = require('mongoose');


module.exports = async ()=>{
 try{
    console.log('database connection : rocess.env.MONGODB_URL: ', process.env.MONGODB_URL)
    await mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});
    console.log('Database Connected...')
 }catch(error){
    console.log('Database Connectivity error...', error)

    throw new Error(error);
 }
}