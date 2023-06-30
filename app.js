
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const loginRoutes = require('./routes/loginRoutes.js')
const productRoutes = require('./routes/productRoutes.js')
const dbConnection = require('./database/connection.js')


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
dotenv.config();
dbConnection();

console.log('Env Dot : process.env.PORT: ', process.env.PORT)
const PORT = process.env.PORT | 8081;

//Add routes
app.use('/api/v1', loginRoutes);
app.use('/api/v1/products', productRoutes);



app.listen(PORT, ()=>{
    console.log('App Server started at ', PORT);
})