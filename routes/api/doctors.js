const router=require('express').Router();
const DoctorsController=require('../../controllers/doctorsController');

router.route('/')
.get(DoctorsController.findAll)
.post(DoctorsController.create);

router.route('/:id')
.get(DoctorsController.findById)
.put(DoctorsController.update)
.delete(DoctorsController.remove)

module.exports=router;