const express = require('express');

const router = express.Router();

const { route } = require('./adminRoute');
const {addSubject,subjectallote} = require('../controller/hodController');


// add subject
router.post('/addsubject',addSubject);
router.get('/addsubject',(req,res)=>{
    res.send('This page is add subject');
});


router.post('/allotesubjects',subjectallote);
router.get('/allotesubjects',(req,res)=>{
    res.send("This page is for alloted subjects");
})
module.exports = router;