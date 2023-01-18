const db=require('../models');
const Doctor=db.Doctor;

//find all the Doctor using query
exports.findAll=(req,res)=>{
    Doctor.find(req.query)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send(err))
}

//Doctor is not availabe then create a new Doctor

exports.create=(req,res)=>{
    Doctor.create(req.body)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send(err))
}

//find the Doctor by id

exports.findById=(req,res)=>{
    Doctor.findById(req.params.id)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send({
        message:"the finby is Doctor is not working ",err
    }))
}

//update the Doctor

exports.update=(req,res)=>{
    Doctor.findOneAndUpdate({
        _id:req.params.id
    },req.body)
    .then(dbModel=>res.status(200).send({message:"Update successfully! ",dbModel}))
    .catch(err=>res.status(422).send({
        message:"the update Doctor is not working ",err
    }))
}

//remove the Doctor

exports.remove=(req,res)=>{
    Doctor.findById({_id:req.params.id})
    .then(dbModel=>dbModel.remove())
    .then(dbModel=>res.status(200).send({
        message:"delete successfully",dbModel
    }))
    .catch(err=>res.status(422).send({
        message:"the romve Doctor is not working",err
    }))
}