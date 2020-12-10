const express = require('express');
const app = express();
const port = process.env.PORT   || 3000;

const nav = [
    
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/signup',name:'Signup'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/addbook',name:'Addbook'
    },
    {
        link:'/addauthor',name:'Add-Author'
    }
];
      
const booksRouter = require ('./src/routes/bookRoutes') (nav)
const authorsRouter = require ('./src/routes/authorRoutes') (nav)
const loginRouter = require ('./src/routes/loginRoutes') (nav)
const signupRouter = require ('./src/routes/signupRoutes') (nav)
const adbookRouter = require ('./src/routes/adbookRoutes') (nav)
const adauthorRouter = require ('./src/routes/adauthorRoutes') (nav)

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbook',adbookRouter);
app.use('/addauthor',adauthorRouter);


app.get('/',function(req,res){
    // res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",
    {
        nav,
        title:'LIBRARY'
    });
});





app.listen(port,()=>{console.log("Server Ready at " + port)});