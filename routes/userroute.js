const router=require('express').Router();
const {sequelize,user} = require('../models');
// const sqs=require('../Sqs/sqs');

//creating post request
router.post('/',async function(req,res){
    const data=req.body;
    console.log("hello");
    try {
        const result=await user.create({"email":data.email,"password":data.password});
        //sqs.sendMessage(data);
    res.json(data);
    } catch (error) {
        console.log(error);
        res.json("error");
    }
    
    
})

module.exports=router;