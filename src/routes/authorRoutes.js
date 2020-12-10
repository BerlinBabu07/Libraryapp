const express = require('express');
const authorsRouter = express.Router();
function router (nav) {
    var authors = [
        {   
            title : 'APJ Abdul Kalam',
            genre: 'History',
            img: "apj.jpg"
        },
        {   
            title : 'J k Rowling',
            genre: 'Fantasy',
            img: "jk.jpg"
        },
        {
            title : 'William Shakespeare',
            genre: 'History',
            img: "ws.jpg"
        },
        {
            title : 'Leo Tolstoy',
            genre: 'Novel',
            img: "leo.jpg"
        },
        {
            title : 'Charles Dickens',
            genre: 'Fiction',
            img: "cd.jpg"
        }
    
    ]



authorsRouter.get('/',function(req,res){
    
    res.render("authors",
    {
        nav,
        title:'LIBRARY',
        authors
    });

});
authorsRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render("author",
    {
        nav,
        title:'LIBRARY',
        author : authors[id]
    
    });

});

    return authorsRouter;

}


module.exports = router;