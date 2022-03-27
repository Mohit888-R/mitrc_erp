const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    "Name":{
        type:String,
    },
    "RollNo":{
        type:String,
    },
    "Fathers_name":{
        type:String,
    },
    "Mothers_name":{
        type:String
    },
});


const stduser = mongoose.model('studentrecordes',userSchema);

module.exports = stduser;