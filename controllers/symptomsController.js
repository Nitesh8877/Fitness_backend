const db=require('../models');
const Symptom=db.SymptomJaurnal;

//find all the appointent using query
exports.findAll=(req,res)=>{
    Symptom.find(req.query)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send(err))
}

//Symptom is not availabe then create a new Symptom

exports.create=(req,res)=>{
    Symptom.create(req.body)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send(err))
}

//find the Symptom by id

exports.findById=(req,res)=>{
    Symptom.findById(req.params.id)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send({
        message:"the finby is Symptoms is not working ",err
    }))
}

//update the Symptom

exports.update=(req,res)=>{
    Symptom.findOneAndUpdate({
        _id:req.params.id
    },req.body)
    .then(dbModel=>res.status(200).send({message:"Update successfully! ",dbModel}))
    .catch(err=>res.status(422).send({
        message:"the update Symptoms is not working ",err
    }))
}

//remove the Symptom

exports.remove=(req,res)=>{
    Symptom.findById({_id:req.params.id})
    .then(dbModel=>dbModel.remove())
    .then(dbModel=>res.status(200).send({
        message:"delete successfully",dbModel
    }))
    .catch(err=>res.status(422).send({
        message:"the romve Symptom is not working",err
    }))
}