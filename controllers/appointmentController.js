const db=require('../models');
const Appointment=db.Appointment;

//find all the appointent using query
exports.findAll=(req,res)=>{
    Appointment.find(req.query)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send(err))
}

//appointment is not availabe then create a new appointment

exports.create=(req,res)=>{
    Appointment.create(req.body)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send(err))
}

//find the appointment by id

exports.findById=(req,res)=>{
    Appointment.findById(req.params.id)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send({
        message:"the finby is appoinment is not working ",err
    }))
}

//update the appointment

exports.update=(req,res)=>{
    Appointment.findOneAndUpdate({
        _id:req.params.id
    },req.body)
    .then(dbModel=>res.status(200).send({message:"Update successfully! ",dbModel}))
    .catch(err=>res.status(422).send({
        message:"the update appoinment is not working ",err
    }))
}

//remove the appointment

exports.remove=(req,res)=>{
    Appointment.findById({_id:req.params.id})
    .then(dbModel=>dbModel.remove())
    .then(dbModel=>res.status(200).send({
        message:"delete successfully",dbModel
    }))
    .catch(err=>res.status(422).send({
        message:"the romve appointment is not working",err
    }))
}