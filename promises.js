///***************PROMISES API ***************///
const fs = require("fs/promises");

(async ( ) => {
    try{
        await fs.copyFile("command.txt","copied-promise.txt");
    }catch(error){
        console.log(error);
    }
})();