const express = require ('express');
const {sequelize , user} =require('./models')
const userroute = require('./routes/userroute');
const app = express();

app.use(express.json());

//routing
// app.post('/user',async(req,res)=>{
//     const {email,password} = req.body;
//     try {
//         await user.create({email,password});
//         return res.json(user);
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json(err);
//     }
// })
app.use('/api/user',userroute)
//creating http server
sequelize.sync({alert:true}).then(()=>{
    app.listen(3000,function(){
        console.log('server started successfully')
    })
})