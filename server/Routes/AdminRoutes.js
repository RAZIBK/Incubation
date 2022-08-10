const {adminlogin,newdata,changeStatus,PendingApplications,AllApplications,allSlots,SlotUpdate,viewApplication}=require('../Controllers/AdminControllers');
const { checkUser } = require('../Middlewares/UserMiddlewares');
const {checkAdmin } = require('../Middlewares/AdminUserMiddlewares');

const router =require('express').Router();

router.post('/',checkAdmin)
router.post('/login',adminlogin)
router.get('/newdata',newdata)
router.get('/alldata',AllApplications)
router.get("/pendingapplications",PendingApplications)
router.post('/changeStatus',changeStatus)
router.get('/allslots',allSlots)
router.post('/slotUpdate',SlotUpdate)
router.get('/viewApplication/:id',viewApplication)

module.exports=router;