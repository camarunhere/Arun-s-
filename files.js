const fs = require('fs'); //importing filesystem


//reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {            //1st argument takes path & 2nd argument is a function that will fire when path is complete
//     if(err){
//         console.log(err);                                    //function has two arguments one if there is error and data if no error
//     }           
//     console.log(data.toString());         // We would get a buffer, it is basically just a package of data that is been sent to us when we read the file                                    
// });   

// console.log('last line'); //it is logged first because the above one is a callback function

//writing files
// fs.writeFile('./docs/blog1.txt','Hey Peeps!!!', () =>{      //1st argument is path & and 2nd argument takes the text to replace existing 3rd is callback function
//     console.log('File is Written');
// });

// fs.writeFile('./docs/blog2.txt','Hey Again!!!', () =>{      //1st argument is path & and 2nd argument takes the text to replace existing 3rd is callback function
//     console.log('File is Written');
// });

//directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('Folder Created');
//     });              
// } else{
//     fs.rmdir('./assets',(err) =>{
//         if (err) {
//             console.log(err)
//         }
//         console.log('Folder Deleted')
//     })
// }
//                  //If we run this code again we might end up with an error so.. It is better to check if the folder already exists unless it handled

//deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log('File Deleted');
    })
}