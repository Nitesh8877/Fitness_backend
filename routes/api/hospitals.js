const router=require('express').Router();
const HospitalController=require('../../controllers/hospitalsController');

router.route('/')
    .get(HospitalController.findAll)
    .post(HospitalController.create)

router.route('/:id')
    .get(HospitalController.findById)
    .put(HospitalController.update)
    .delete(HospitalController.remove)

module.exports=router;