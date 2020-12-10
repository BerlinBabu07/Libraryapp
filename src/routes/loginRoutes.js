const express = require('express');
const loginRouter = express.Router();
function router (nav) {



    loginRouter.get('/',function(req,res){
    
        res.render("login",
        {
            nav,
            title:'LIBRARY',
            
        });
    
    });

    loginRouter.get('/index',function(req,res){
    
        res.render("index",
        {
            nav,
            title:'LIBRARY',
            
        });
    
    });
    



    return loginRouter;

}


module.exports = router;