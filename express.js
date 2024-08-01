//Express is a frame work that helps us to easily manage our routing requests server side logic and responses in a much more elegant way it makes our code easier to read and extend 
//Express saves us time allows to write clean code and it comes with some extra features that really helps our code better

const express = require('express');


//express app
const app = express();

//listen for requests
app.listen(3010);

app.get('/', (req, res) => {  //1st arg takes url 2nd arg take req and res objects so we can do something with those..

    // res.send('<p>Home Page</p>');  //It infers the type of content that we are trying to send to the browser and it automatically sets the content type header
                                  //It will automatically set the status code as well
       res.sendFile('./views/index.html', {root: __dirname });  
}); 

app.get('/about', (req, res) => {

    // res.send('<p>About Page</p>');
    res.sendFile('./views/about.html', {root: __dirname });  

});

// redirects
app.get('/about-us',(req, res) => {
    res.redirect('/about');
});


// 404 page
app.use((req, res) => { //we use this method to create middleware and fire middleware functions in Express
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});  