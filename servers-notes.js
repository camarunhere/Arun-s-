//Ip addresses are alike addresses for computers which are connected to internet have a unique IP address to identify every computer has
// IF we create and publish a website it will be hosted on a computer and that computer will have n IP Address to identify it
// When we want to connect something in the host we need to know its IP address to do it .
// We could then type the Ip into a browser if we wanted to in the address bar to connect our server
//Ip addresses are just a series of numbers and they are hard to remember for every website so instead we use domain names to mask this IP addresses
//When we type a domain name into a browser and hit enter it will find the ip address associated with it.
//Then it will find the computer that is hosting the website and communicate with that .
// Server wiil look at that request and respond probably with an HTML Page
// When  we type something into a browser that is a get request (it's made everytime we go to a different webpage either by a link or directly typing into the address bar)
//This communication between the server and client is via HTTP(Hyper Text Transfer Protocol) 
//HTTP is a just a set of instructions which dictate how communication occurs
// If HTTP does not exist then the server and client cannot be able to communicate effectively with one another
//In node we write code to create a server and listen for requests coming in from browser
//In node we manually create the server which lives on the backend of our website and it's the server that listens for requests from the browser and then decides what responses to send the browser
 