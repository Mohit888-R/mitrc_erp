const bcrypt = require('bcryptjs');
const gravatar  = require('gravatar');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const csv = require('csvtojson');
const bodyparser = require('body-parser') 


//model
const faculty = require('../model/facultySchema');



// config
const keys = require('../db/conn');
const facultyuser = require('../model/facultySchema');


module.exports = {
    getfaculty:async(req,res,next)=>{
        try{
            const{email,emp_id,password} = req.body;
            
            if(!email||!emp_id || !password){
                return res.status(400).json({error:"plz filled "});
            }
    
            const userlogin = await facultyuser.findOne({email:email});
    
            if(userlogin){
                const isMatch = await facultyuser.findOne({password:password,emp_id:emp_id});
                if(!isMatch){
                    res.json({message:"Invalid Creadiantial pass"});
                }else{
                    res.json({message:"signin successful"});
                }
            }else{
                res.json({message:"Invalid Creadiantial"});
            }
        }
        catch(err){
            console.log(err);
        }
    },
    addStudent:async(req,res,next)=>{
        try{
            const storage = multer.diskStorage({
                destination:(req,file,cb)=>{
                    cb(null,'./public/uploads');
                },
                filename:(req,file,cb)=>{
                    cb(null,file.originalname);
                }
            });
            const uploads = multer({storage:storage});
            

        }catch(err){
            console.log(err);
        }
    }
}