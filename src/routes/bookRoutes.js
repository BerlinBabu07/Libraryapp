const express = require('express');
const booksRouter = express.Router();
function router (nav) {
    var books = [
        {
            title: 'Wings of Fire',
            author: 'APJ Abdul Kalam',
            genre: 'History',
            img: "apj.jpg"
        },
        {
            title: 'The Theory of Everything',
            author: 'Stephen Hawking',
            genre: 'Science',
            img: "theory.jpg"
        },
        {
            title: 'Harry Potter',
            author: 'J k Rowling',
            genre: 'Fantasy',
            img: "harry.jpg"
        },
        {
            title: 'Life of Pi',
            author: 'Yann Martel',
            genre: 'fiction',
            img: "pi.jpg"
        },
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: "tom.jpg"
        }
    
    ]



booksRouter.get('/',function(req,res){
    
    res.render("books",
    {
        nav,
        title:'LIBRARY',
        books
    });

});
booksRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render("singlebook",
    {
        nav,
        title:'LIBRARY',
        singlebook : books[id]
    
    });

});

    return booksRouter;

}


module.exports = router;