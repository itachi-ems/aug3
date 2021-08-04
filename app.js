const express = require ('express');
const {sequelize} =require('./models')
const app = express();

//routing
app.get('/user',function(req,res){
    res.json({"name":"harsh"});
});

//creating http server
sequelize.sync({alert:true}).then(()=>{
    app.listen(3000,function(){
        console.log('server started successfully')
    })
})