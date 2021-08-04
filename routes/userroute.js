const router=require('express').Router();
const { genSaltSync, hashSync ,compareSync, compare} = require('bcrypt');
const {sequelize,user} = require('../models');
const { sign } = require('jsonwebtoken');
const { checkToken } = require('../auth/token_validation');
// const sqs=require('../Sqs/sqs');

//creating post request
router.post('/',async function(req,res){
    const body=req.body;
    const salt = genSaltSync(10);
    body.password= hashSync(body.password,salt);
    console.log("hello");
    try {
        const result=await user.create({"email":body.email,"password":body.password});
        //sqs.sendMessage(body);
    res.json(body);
    } catch (error) {
        console.log(error);
        res.json("error");
    }
    
    
})

//get all user
router.get('/',checkToken,async(req,res)=>{
    try {
        const users= await user.findAll();
        return res.json(users);
    } catch (error) {
        console.log(error);
        res.json("error");
    }

})

//get user by email
router.get('/login',checkToken,async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    try {
        const users= await user.findOne({
            where:{email}
        });
        const result= compareSync(password,users.password);
    //result.password = undefined;
    //const jsontoken = sign({result: result},"abc1234",{
       // expiresIn:"10h"
    //});
     res.json({
         
            email,
            success:"1",
            message:"search successfull"});

    } catch (error) {
        console.log(error);
        res.json("error");
    }
    
    
})

//Login
router.post('/login',async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    try {
        const users= await user.findOne({
            where:{email}
        });
        const result= compareSync(password,users.password);
    //result.password = undefined;
    const jsontoken = sign({result: result},"abc1234",{
        expiresIn:"10h"
    });
     res.json({token:jsontoken,
                success:"1",
            message:"successfull"});

    } catch (error) {
        console.log(error);
        res.json("error");
    }
    
    
})

module.exports=router;