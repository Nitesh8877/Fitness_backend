const appoinmentController=require('../../controllers/appointmentController');

const router=require('express').Router()

router.route("/")
.get(appoinmentController.findAll)
.post(appoinmentController.create)

router.route("/:id")
.delete(appoinmentController.remove)
.get(appoinmentController.findById)
.put(appoinmentController.update)

module.exports=router;