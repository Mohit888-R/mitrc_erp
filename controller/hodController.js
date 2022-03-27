const bcrypt = require('bcryptjs');
const gravatar  = require('gravatar');
const jwt = require('jsonwebtoken');

//model
const subjectuser = require('../model/subjectSchema');
const students = ('../model/studentSchema'); 
const Admin = ('../model/adminSchema');
// const faculty = ('../model/facultySchema');
const alloteSub = ('../model/allotesubSchema');
//config
const keys = require('../db/conn');
const facultyuser = require('../model/facultySchema');



module.exports = {
    addSubject:async(req,res,next)=>{
            const {year,session,semester,subject,subjecttype,subjectcode,batch,totalhours } = req.body;
            if(!year || !session || !semester || !subject || !subjecttype || !subjectcode || !batch || !totalhours){
                return res.status(404).json({error:"plz filled all properties"});
            }
            try{
                const subjectExist = await subjectuser.findOne({subjectcode});
                if(subjectExist){
                    return res.status(404).json({error:"Subject is already exist"});
                }else{
                    const subjects = new subjectuser({year,session,semester,subject,subjecttype,subjectcode,batch,totalhours });
                    await subjects.save();
                    res.status(201).json({message:"subject added successful"})
                }
            }catch(err){
                console.log(`error in adding new subject, ${err.message}`);
            }
        },
        subjectallote:async(req,res)=>{
            const {subject,subjectcode,emp_id,department,totalhours} = req.body;
            if(!subject || !subjectcode || !emp_id || !department){
                return res.status(404).json({error:"plz filled all properties"});
            }
            try{
                // const subjectExist = await alloteSub.findOne({subjectcode});
                // if(subjectExist){
                //     res.status(404).json({message:"Subject is already exist"});
                // }else{
                    const subjectExist = await subjectuser.findOne({subjectcode});
                const empExist = await facultyuser.findOne({emp_id});
                
                if(subjectExist && empExist){
                    const allotesubjects = new subjectuser({subject,subjectcode,emp_id,department});
                    await allotesubjects.save();
                    res.status(201).json({message:"Subject alloted succussfully"});
                }else{
                    res.status(404).json({message:"Subject is already not in record.."});
                   
                }
                // }
                
            }catch(err){
                console.log(err);
            }
        }
    }
    
