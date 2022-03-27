const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const mongoose = require("mongoose");



const AllteSubSchema = new mongoose.Schema({
    // this part is user after admin panel
    "subject":{
        type:String,
        required:true
    },
    "subjectcode":{
        type:String,
        required:true
    },
    "emp_id":{
        type:String,
        required:true
    },
    "department":{
        type:String,
        required:true
    }
})


const allotesubjectuser = mongoose.model('allotesubject',AllteSubSchema);

module.exports = allotesubjectuser;