console.log("first");
require('fs').readFile('/users/santo/Desktop/text.txt;(err,data) => {
    if(err)return;
    //do something with data.....
    console.log("Second");
},);
console.log("Third");