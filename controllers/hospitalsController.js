const db=require('../models');
const Hospital=db.Hospital;

//find all the Hospital using query
exports.findAll=(req,res)=>{
    Hospital.find(req.query)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send(err))
}

//Hospital is not availabe then create a new Hospital

exports.create=(req,res)=>{
    Hospital.create(req.body)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send(err))
}

//find the Hospital by id

exports.findById=(req,res)=>{
    Hospital.findById(req.params.id)
    .then(dbModel=>res.status(200).send(dbModel))
    .catch(err=>res.status(422).send({
        message:"the finby is Hospital is not working ",err
    }))
}

//update the Hospital

exports.update=(req,res)=>{
    Hospital.findOneAndUpdate({
        _id:req.params.id
    },req.body)
    .then(dbModel=>res.status(200).send({message:"Update successfully! ",dbModel}))
    .catch(err=>res.status(422).send({
        message:"the update Hospital is not working ",err
    }))
}

//remove the Hospital

exports.remove=(req,res)=>{
    Hospital.findById({_id:req.params.id})
    .then(dbModel=>dbModel.remove())
    .then(dbModel=>res.status(200).send({
        message:"delete successfully",dbModel
    }))
    .catch(err=>res.status(422).send({
        message:"the romve Hospital is not working",err
    }))
}