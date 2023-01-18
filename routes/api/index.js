const router=require('express').Router()
router.use((req,res,next)=>next())
router.use('/appointments', require('./appointment'))
router.use('/logs',require('./healthLogs'));
router.use('/symptoms',require('./symptoms'));
router.use('/prescriptions',require('./prescriptions'))
router.use('/doctors',require('./doctors'));
router.use('/hospitals', require('./hospitals'));
module.exports=router;