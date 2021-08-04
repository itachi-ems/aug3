const express = require ('express');
const cors=require('cors');
const {sequelize , user} =require('./models')
const userroute = require('./routes/userroute');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/user',userroute)

//creating http server
sequelize.sync({alert:true}).then(()=>{
    app.listen(3000,function(){
        console.log('server started successfully')
    })
})


// pkill node