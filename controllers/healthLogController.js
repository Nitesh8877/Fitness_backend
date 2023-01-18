const db=require('../models');
const HealthLog=db.HealthLog;

//find all the appointent using query
exports.findAll=(req,res)=>{
    HealthLog.find(req.query)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send(err))
}

//HealthLog is not availabe then create a new HealthLog

exports.create=(req,res)=>{
    HealthLog.create(req.body)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send(err))
}

//find the HealthLog by id

exports.findById=(req,res)=>{
    HealthLog.findById(req.params.id)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send({
        message:"the finbyid is appoinment is not working ",err
    }))
}

//update the HealthLog

exports.update=(req,res)=>{
    HealthLog.findOneAndUpdate({
        _id:req.params.id
    },req.body)
    .then(dbModel=>res.status(200).send({message:"Update successfully! ",dbModel}))
    .catch(err=>res.status(422).send({
        message:"the update appoinment is not working ",err
    }))
}

//remove the HealthLog

exports.remove=(req,res)=>{
    HealthLog.findById({_id:req.params.id})
    .then(dbModel=>dbModel.remove())
    .then(dbModel=>res.status(200).send({
        message:"delete successfully",dbModel
    }))
    .catch(err=>res.status(422).send({
        message:"the romve HealthLog is not working",err
    }))
}