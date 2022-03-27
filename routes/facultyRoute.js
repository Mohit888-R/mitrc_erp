const express = require('express');

const router = express.Router();

const {getfaculty,addStudent} = require('../controller/facultyController');
const { route } = require('./adminRoute');


//loginfaculty
router.post('/facultylogin',getfaculty);
router.get('/facultylogin',(req,res)=>{
    res.send('this is login faculty');
})

router.post('/uploadstudentid',addStudent,(req,res,next)=>{
    csv()
.fromFile(req.file.path)
.then((jsonObj)=>{
    console.log(jsonObj);
    
     csvModel.insertMany(jsonObj,(err,data)=>{
            if(err){
                console.log(err);
            }else{
                res.redirect('/');
            }
     });
   });
});
router.get('/uploadstudentid',(req,res)=>{
    res.send('this is student detail upload page');
})

module.exports = router;