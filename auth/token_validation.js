const {verify} = require ('jsonwebtoken');


module.exports= {
    checkToken:(req,res,next) => {
        const token = req.get("Auth");
        console.log(token);
        if (token) {
            //token=token.slice(7);
            verify(token,"abc1234",(err,decoded)=>{
                if (err) {
                    res.json({
                        success:"0",
                        message:"invalid",
                    })
                } else {
                    next();
                }
            })
        } else {
            res.json({
                success:"0",
                message:"Access denied",
            })
        }
    }
}