
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv/config');
const app = express();
app.use(morgan('dev'));

app.use(express.json());

// Routers 
const PersonRoute = require('./PersonsRouter');
app.use('/persons',PersonRoute);
const CustomerRoute = require('./CustemerRoute');
app.use('/customer',CustomerRoute);


//Port 
app.listen(3000,()=>{
    console.log('server started 3000');
});


// Db connection
mongoose.connect(process.env.DBconnection,(err)=>{
    if(err){
        console.log('db is not connected',err);
    }
    else{console.log('DB connected sucecessfullly');}
});


//Middleware
app.use((req,res,next)=>{
    console.log('hey am middleware');
    next();
});












