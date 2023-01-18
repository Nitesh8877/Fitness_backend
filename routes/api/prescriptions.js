const router=require('express').Router();
const PrescriptionController=require('../../controllers/prescriptionsController');

router.route('/')
.get(PrescriptionController.findAll)
.post(PrescriptionController.create)

router.route('/:id')
.get(PrescriptionController.findById)
.put(PrescriptionController.update)
.delete(PrescriptionController.remove)


module.exports=router;