const express = require('express');
const router = express.Router();

const {adminSignup,adminLogin,addFaculty}= require('../controller/adminController');

router.post('/adminsignup',adminSignup);
router.get('/adminsignup',(req,res)=>{
        res.send('this is admin signup page');
})
router.post('/adminlogin',adminLogin);
router.get('/adminlogin',(req,res)=>{
    res.send('this is admin login page');
})


//addfaculty
router.post('/facultysignup',addFaculty);
router.get('/facultysignup',(req,res)=>{
    res.send('this is add faculty.');
    // res.send(req.body.username);
})




module.exports = router;