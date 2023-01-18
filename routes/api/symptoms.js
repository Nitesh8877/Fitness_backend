const router=require('express').Router();
const SymptomsController=require('../../controllers/symptomsController');

router.route('/')
    .get(SymptomsController.findAll)
    .post(SymptomsController.create)

    router.route('/:id')
    .delete(SymptomsController.remove)
    .put(SymptomsController.update)
    .get(SymptomsController.findById)


    module.exports=router;