const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
/**
 * in order to create a doctor we will require the following:
 * first and last name clinic associated with as dropdown 
 * nurse name for further contatct speciality 
 * new docter schema object for the login purpose
 * 
 */
const DocterSchema=new Schema({
    firstname:{
        type:String,
        trim:true,
        required:"First name is required"
    },
    lastname:{
        type:String,
        trim:true,
        required:"Last name is required"
    },
    clinic:{
        type:String,
        trim:true,
    },
    phone:{
        type:String,
        trim:true,
        required:'Specialty is required'
    },
    userCreated:{
        type:Date,
        default:Date.now
    }
})

const Doctor=mongoose.model("Doctor",DocterSchema);

module.exports=Doctor;