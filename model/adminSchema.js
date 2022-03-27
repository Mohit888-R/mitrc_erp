const mongoose = require('mongoose');
// const {Schema} = mongoose;


const adminSchema = new mongoose.Schema({
    "loginid":{
        type:String,
        required:true
    },
    "password":{
        type:String,
        required:true
    }
})


const admin = mongoose.model('Admin',adminSchema);

module.exports = admin;