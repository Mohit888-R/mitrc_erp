const mongoose = require('mongoose');
const {Schema} = mongoose;


const subjectSchema = new Schema({
    year:Number,
    session:String,
    semester:Number,
    subject:String,
    subjecttype:String,
    subjectcode:String,
    batch:String,
    totalhours:Number,
    emp_id:String,
    department:String

})


module.exports = mongoose.model('subjects',subjectSchema);