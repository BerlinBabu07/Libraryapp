const express = require('express');
const adauthorRouter = express.Router();


function router (nav) {


adauthorRouter.get('/',function(req,res){
    
    res.render("addauthor",
    {
        nav,
        title:'LIBRARY',
    
    });

});

adauthorRouter.post('/add',function(req,res){
    
    res.send("Sucess! Author has Added  ");
}); 

return adauthorRouter;
}

module.exports = router;