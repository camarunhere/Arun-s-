//We use view engine or template engine to create dynamic pages,this is something that express can use easily
//EJS(Embedded JavaScript Templating) is third party application used to write dynamic pages in nodejs
//EJS Templates are processed through the EJS view engine on the server
//The files that which we give for representing all files in ejs and later if this file is edited we can edit it in every other file because we are importing the file...
//These are known as partials or partial templates they are basically parts of template that can be reused in different views

const express = require('express');
const morgan  = require('morgan');
const mongoose= require('mongoose');
const Blog       = require('./models/blog'); 
const { result } = require('lodash');
const { render } = require('ejs');
// const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://Iam_Arun:arun1234@nodejs.ptb2nly.mongodb.net/nodejs?retryWrites=true&w=majority&appName=NodeJs';
mongoose.connect(dbURI)  // , { useNewUrlParser: true, useUnifiedTopology: true }
    .then((result) => app.listen(3010))
    .catch((err) => console.log(err));
//register view engine
app.set('view engine', 'ejs');   //"app.set" let us configure some application settings and one of those settings is view engine that it uses the EJS view engine
// app.set('views', 'myviews');     //If there is a separate folder we use this line otherwise not required   

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

//mongoose and mongo sanbox routes
// app.get('/add-blog',(req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         subject: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/all-blogs', (req, res) =>{
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById("66a227c0dbe97c7dcf411b6d")
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// })

// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });


// app.use((req, res, next) => {
//     console.log('In the next middleware');
//     next();
// });


//routes
app.get('/', (req, res) => { 
    res.redirect('/blogs');
}); 

// app.use((req, res, next) => {
//     console.log('In the next middleware');
//     next();
// });

app.get('/about', (req, res) => {

    // res.send('<p>About Page</p>');
    // res.sendFile('./views/about.html', {root: __dirname });  
    res.render('about',{ title: 'About'});     //middleware

});

//blog routes
// app.use('blogs', blogRoutes);


app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1}) //-1 refers to reverse order showing of the blogs
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
});

app.post('/blogs', (req, res)=> {
     console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/blogs:id', (req, res) => {  //There should be a colon infront of whatever we want to call...
    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details'});
        })
        .catch(err => {
            console.log(err);
        });
}) 


app.delete('/blogs/:id', (req, res) => {
    // const id = req.params.id;

    // Blog.findByIdAndDelete(id)
    //     .then(result => {
    //         res.json({ redirect: '/blogs' })
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
})

app.get('/blogs/create',(req, res) => {
    res.render('create',{ title: 'Create a New Blog'});  //middleware
});


// 404 page
app.use((req, res) => { //we use this method to create middleware and fire middleware functions in Express
    res.status(404).render('404',{ title: '404'});  //middleware kind of like a catchall
});  