const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const mongodb = require('mongodb');
const mogoose = require('mongoose');
const path = require('path');
const app = express();



dotenv.config();
const PORT = process.env.PORT ;

//fetch data from the server
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.json());


require('./db/conn');

const adminRoutes = require('./routes/adminRoute');
const facultyRoutes = require('./routes/facultyRoute');
const hodRoutes = require('./routes/hodRoutes');

//Routes
app.use('/admin',adminRoutes);
app.use('/faculty',facultyRoutes);
app.use('/hod',hodRoutes);


app.get("/",(req,res)=>{
    res.send("This is home page");
})

app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`);
})