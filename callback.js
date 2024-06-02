
const fs = require("fs");

fs.copyFile("command.txt","copied-callback.txt",(error) => {
    if(error)console.log(error);
});