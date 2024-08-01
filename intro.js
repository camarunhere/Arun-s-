//Node allows us to run JavaScript on server side as well as or even directly on computers
//V8 engine compiles JavaScript into machine code
//Node js is a program and also written in C++ and that wraps the v8 engine
//v8 that lives in browsers also lives inside node as well because node is written in C++ 
//Node js compiles our code to machine code with in-built v8 engine
//While we are using node for compilation of JavaScript code and that kind of functionality includes like the ability to 
                             //Read & Write files on a computer
                             //Connect to a database
                             //Act as a server for content
// To run JS outside the browser we lose access to JS features such as the DOM(Document Object Model). We cannot interract with HTML Elements

//The role of node in a website is basically to run JS on the backend or a server side and then we are going to be handling requests coming in from a browser
// const name = "Hitachi";

// console.log(name);

const greet = (name) => {
    console.log(`Hey, ${name}`);
}

greet('Ippo');
greet('Mamoru');
