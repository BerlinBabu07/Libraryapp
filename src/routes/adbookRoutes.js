const express = require('express');
const adbookRouter = express.Router();


function router (nav) {


adbookRouter.get('/',function(req,res){
    
    res.render("addbook",
    {
        nav,
        title:'LIBRARY',
    
    });

});

adbookRouter.post('/add',function(req,res){
    
    res.send("hey..Well Done, New Book is CREATED");
}); 

return adbookRouter;
}

module.exports = router;