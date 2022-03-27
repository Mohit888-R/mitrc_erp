const bcrypt = require('bcryptjs');
const gravatar  = require('gravatar');
const jwt = require('jsonwebtoken');

// Models
const Admin = require('../model/adminSchema');


//Config
const keys = require('../db/conn');
const facultyuser = require('../model/facultySchema');


module.exports = {
    adminSignup:async(req,res,next)=>{
        const{loginid,password} = req.body;
        // hashing 
        const passwordhash = await bcrypt.hash(password,8);
        if(!loginid || !password){
            return res.status(422).json({error:"plz filled all properties"});
        }
        try{
            const userExist = await Admin.findOne({loginid:loginid});
            if(userExist){
                return res.status(422).json({error:"Email is already exist"});
            }
            else{
                const user = new Admin({loginid,password:passwordhash});
                
                await user.save();
                res.status(201).json({message:'User register successfull'});
            }
        }
        catch(err){
            console.log({message:`error : ${err}`});
        }
    },
    adminLogin:async(req,res,next)=>{
        try{
            const {loginid, password} = req.body;
            if(!loginid || !password){
                return res.status(400).json({error:"plz filled"});
            }
            const userlogin = await Admin.findOne({loginid:loginid});

            if(userlogin){
                const isMatch = await Admin.findOne({password:password});
                if(!isMatch){
                    res.json({message:"Invalid creadiantial pass"});
                }else{
                    res.json({message:'Admin Signin successfully'});
                }
            }else{
                res.json({message:"Invalid crediential"});
            }

        }
        catch(err){
            console.log(err);
        }
    },
    addFaculty:async(req,res,next)=>{
        const {firstname,secondname,username,email,emp_id,phone_num,department,user_role,password}= req.body;
        const hashfacultypass = await bcrypt.hash(password,8);
        if(!firstname || !secondname || !username || !email || !emp_id || !phone_num || !department || !user_role || !password){
            return res.status(404).json({error:"plz filled all properties"});
        }

        try{
            const userExit = await facultyuser.findOne({email:email});
        if(userExit){
            return res.status(404).json({error:"Email is already exist"});
        }else{
            const user = new facultyuser({firstname,secondname,username,email,emp_id,phone_num,department,user_role,password:hashfacultypass});
            await user.save();
            res.status(201).json({
                message:"user register successful"
            })
        }
        }catch(err){
            console.log(err);
        }
    }
}