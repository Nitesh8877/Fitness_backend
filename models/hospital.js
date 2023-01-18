const mongoose=require('mongoose');
const Schema=mongoose.Schema;

/**
 * In order to create a hospital we will require the following:
 * hospital name to be populated as dropdown on doctor page
 * street address, city, state and zip, phone number and fax number.
 */


 const HospitalSchema=new Schema({
    hospitalname:{
        type:String,
        trim:true,
        requried:"Hospital name is requried"
    },
    address:{
        type:String,
        trim:true,
        required:"Address is required"
    },
    city:{
        type:String,
        trim:true,
        required:"Address is required"
    },
    state:{
        type:String,
        trim:true,
        required:"State is required"
    },
    zip:{
        type:Number,
        trim:true,
        required:"Zip is Required"
    },
    phone:{
        type:Number,
        trim:true,
        match:/\(?\d+\)?[-.\s]?\d+[-.\s]?\d+/,
        required:"Phone is Required"
    },
    userCreated:{
        type:Date,
        default:Date.now
    }
})

const Hospital=mongoose.model("Hospital",HospitalSchema);

module.exports=Hospital;