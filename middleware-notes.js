//The code which runs (on the server) between getting a request and sending a response is known as Middleware app.use(func) is middleware
//app.get fires only for get requests to a certain route
//app.use run for every type of request to all routes including post requests
//Middleware runs from top to bottom in our code and it runs that way until we exit the process or explicitly send a response to the browser
//If we get request is fired it don't go to the other app.use(func) at all.
                                               //Middleware Examples
                //Longer middleware to log details of every request
                //Authentication check middleware for protected routes
                //Middleware to parse JSON data from requests
                //Return 404 pages

//There are tons of middleware funtions that are already created for us that we can use , there is a middleware called Morgan which is a logger and it does a similar thing to  our custom middleware
 