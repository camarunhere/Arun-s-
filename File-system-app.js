const fs = require("fs/promises");

(async () => { 
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

    //COMMANDS
    const CREATE_FILE = "create a file";
  

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