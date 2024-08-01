// const http = require('http');

// const server = http.createServer((req, res) => {    //It is used to create the Server(that stores instance of HTTP) has 2 obejcts(request, response)
    //console.log('Request Made');
//     console.log(req.url,req.method);
    //set header content type
//     res.setHeader('Content-Type', 'text/html'); // means we are sending some plain text to the browser
//     res.write('<head><link rel="stylesheet" href="#"></head>');
//     res.write('<p>Hey Weirdos!!!!!</p>');
//     res.write('<p>Hey Again, Weirdos!!!!!</p>');
//     res.end();
// });  

// server.listen(3003,'localhost', () => {  //1st arg is port number 2nd hostname 3rd is callback function 
//     console.log('listening for requests on port 3003')
// })

//localhost is like a domain name on the web , local host means listen for requests coming to our own computer and this is how we use our own computer as a host when we are developing a website
//127.0.0.1 this IP address and it points directly back to our own computer, when we are connecting to the local host domain in a browser the browser is connecting back to our own computer that acts a host for our website
//Port numbers are like 'doors' into a computer, it represents a specific channel gateway or port on our computer that a certain bit of software our server should communicate through
//Internet communications can be made to different programs 
//Our server also needs its own port number to communicate through , a common port number is 3000 for local web development
//When we use localhost we also type the port number after a colon in the address bar after it. So, the browser then knows to connect to our own computer via this particular port number which is where our server is going to be listening

//request object is used to get the request
//response is used to send response to the browser
//status codes describe the type of response sent to the browser
        //200 - Okay
        //301 - Resource moved
        //404 - Not found
        //500 - Internal server error  there are more:
        //100 Range - informational responses
        //200 Range - Success Codes
        //300 Range - Codes for redirects
        //400 Range - User or Client error codes
        //500 Range - server error codes


const http = require('http');
const fs   = require('fs');
const _    = require('lodash');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    // loadash
    const num = _.random(0, 20);  //these arguments refer to the boundaries...
    console.log(num);

    const greet = _.once(() => {
        console.log('Hey');
    });

    greet();
    greet();


    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
         case '/about-us':
            res.statusCode = 301; //permanently redirected
            res.setHeader('Location', '/about');
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send an html file 
    fs.readFile(path,(err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else{
            //res.write(data);
            res.end(data);
        }
    })
});

server.listen(3003, 'localhost',() => {
    console.log("Listening for requests on port 3003");
})