const { register, login,userApplication,getstatus,Viewapplication } = require('../Controllers/UserControllers');
const {checkUser}=require('../Middlewares/UserMiddlewares')
const router =require('express').Router();

router.post('/',checkUser)
router .post ('/register',register)
router .post ("/login",login)
router.post("/userApplication",userApplication)
router.get('/status/:id',getstatus)
router.get('/viewapplication/:id',Viewapplication)

module.exports=router;

