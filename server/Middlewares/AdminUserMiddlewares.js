// const User = require ('../Models/UserModel');
const Admin=require('../Models/AdminModel')
const jwt = require ('jsonwebtoken');

module.exports.checkAdmin=(req,res,next) =>{
    const token=req.cookies.jwt;
    if(token){
        
        jwt.verify(token,'Razi super secret key',async(err,decodedToken)=>{
            if(err){
                res.json({status:false});
                next();
            }
            else{
                const admin = await Admin.findById(decodedToken.id)
                if(admin) {
                    // console.log(token);
                        res.json({status:true,admin:admin.email})
                }
                else res.json({status:false});
                next()
            }
        })
    }else{
        res.json({status:false});
        next();
    }
}