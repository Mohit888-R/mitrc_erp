const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const mongoose = require("mongoose");
const validator= require('validator');


const userSchema = new mongoose.Schema({
    // this part is user after admin panel
    "firstname":{
        type:String,
        require:true
    },
    "secondname":{
        type:String,
        require:true
    },
    "username":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        require:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
        
    },
    // employee code / employee id
    "emp_id":{
        type:String,
        require:true
    },
    "phone_num":{
        type:Number,
        required:true
    },
    "department":{
        type:String,
        required:true
    },
    "user_role":{
        type:String,
        required:true
    },
    "password":{
        type:String,
        require:true
    }
})


const facultyuser = mongoose.model('faculty',userSchema);

module.exports = facultyuser;