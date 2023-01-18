const db=require('../models');
const Prescriptions=db.Prescription;

//find all the appointent using query
exports.findAll=(req,res)=>{
    Prescriptions.find(req.query)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send(err))
}

//Prescriptions is not availabe then create a new Prescriptions

exports.create=(req,res)=>{
    Prescriptions.create(req.body)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send(err))
}

//find the Prescriptions by id

exports.findById=(req,res)=>{
    Prescriptions.findById(req.params.id)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send({
        message:"the finby is Prescriptions is not working ",err
    }))
}

//update the Prescriptions

exports.update=(req,res)=>{
    Prescriptions.findOneAndUpdate({
        _id:req.params.id
    },req.body)
    .then(dbModel=>res.status(200).send({message:"Update successfully! ",dbModel}))
    .catch(err=>res.status(422).send({
        message:"the update Prescriptions is not working ",err
    }))
}

//remove the Prescriptions

exports.remove=(req,res)=>{
    Prescriptions.findById({_id:req.params.id})
    .then(dbModel=>dbModel.remove())
    .then(dbModel=>res.status(200).send({
        message:"delete successfully",dbModel
    }))
    .catch(err=>res.status(422).send({
        message:"the romve Prescriptions is not working",err
    }))
}