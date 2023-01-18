const router=require('express').Router();
const HealthLogsController=require('../../controllers/healthLogController');

router.route('/')
        .get(HealthLogsController.findAll)
        .post(HealthLogsController.create)

router.route('/:id')
        .get(HealthLogsController.findById)
        .put(HealthLogsController.update)
        .delete(HealthLogsController.remove)

module.exports=router;