const fs = require("fs/promises");

(async () => { 
  
    //COMMANDS
    const CREATE_FILE = "create a file";
    const DELETE_FILE = "delete the file";
    const RENAME_FILE = "rename the file";
    const ADD_TO_FILE = "add to the file";

  const createFile = async (path) => {
    try {
        ///We want to check whether or not We already have the file.
       const existingFileHandle = await fs.open(path, "r");
        existingFileHandle.close();

        ///We already have that file
        return console.log(`The file ${path} already exists.`);
        
      } catch (e) {
        ///We don't have the file we should create it
        const newFileHandle = await fs.open(path, "w")
        console.log("A New file is Successfully created.");
        newFileHandle.close();
      }
    };
   
    const deleteFile =  async (path) => {
      try {
        await fs.unlink(path);
        console.log("The file is succesfully removed.")
      } catch(e){
        if (e.code === "ENOENT"){
          console.log("No file at this path to remove.");
        } else {
          console.log("An error occured while removing the file:");
          console.log(e);
        }
      }
      
  }
    const renameFile = async (oldPath,newPath) => {
      try {
        await fs.rename(oldPath,newPath);
        console.log("The file is successfully renamed.");
      }catch(e){
        if (e.code==="ENOENT"){
          console.log("No file in this path to be renamed.");
        }else{
          console.log("There is no file to get renamed ,or the file might have been deleted");
          console.log(e);
        }
      }
      
  }
    let addedContent;
    const addToFile = async(path,content) => {
      if (addedContent === content) return;
      try{
        const fileHandle = await fs.open(path,"a");
        fileHandle.write(content);
        addedContent = content;
        console.log("The content is added Successfully");
      }catch(e){
        console.log("AN Occured while adding to the file.");
        console.log(e);

      }
    } 

    
  

    const commandFileHandler = await fs.open("./watchfile.txt","r");

    commandFileHandler.on("change", async( ) => {
      ///Getting the size of the file
      const size = (await commandFileHandler.stat()).size;
      //Allocating our buffer with the size of the file
      const buff = Buffer.alloc(size);
      //The location at which we want to start filling our buffer
      const offset = 0;
      //How many bytes we want to read
      const length = buff.bytelength;
      //The position that we want to start reading the file from
      const position = 0;


      ///Reading the file(As we want to read the file) We always want to read the whole content(from beginning all the way to the end)
      await commandFileHandler.read(buff, offset, length, position);
      const command = buff.toString("utf-8");
      
      //Creating a file
      //Creating a path to the file <path>
      if (command.includes(CREATE_FILE)) {
        const filePath = command.substring(CREATE_FILE.length + 1);
        createFile(filePath);
      }
      
      //Delete a file
      //Delete the file <path>
      if (command.includes(DELETE_FILE)) {
        const filePath = command.substring(DELETE_FILE.length + 1)
        deleteFile(filePath)
      }

      //Rename a file
      //Rename the file <path> to <new-path>
        if (command.includes(RENAME_FILE)) {
          const _idx = command.indexOf(" to ");
          const oldFilePath = command.substring(RENAME_FILE.length + 1, _idx)
          const newFilePath = command.substring(_idx + 4)
          renameFile(oldFilePath, newFilePath)
      }
      //Add to file:
      //Add to the file <path> this content: <content>
        if(command.includes(ADD_TO_FILE)){
          const _idx = command.indexOf("this Content:")
          const filePath = command.substring(ADD_TO_FILE.length + 1, _idx);
          const Content = command.substring(_idx + 15);


          addToFile(filePath, Content);
        }
    });

    //Watcher
    const watcher = fs.watch("./watchfile.txt");
    for await (const event of watcher){
    if (event.eventType ==="change") {
      commandFileHandler.emit("change");
    }
  }
})( );

///Decoder changes the binary data(0's & 1's) to something meaningful(human readable or understandable language)
///Encoder changes the something meaningful(human readable or understandable language) to binary data(0's & 1's).