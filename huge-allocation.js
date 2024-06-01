const { Buffer , constants } = require("buffer");
/*
const b = Buffer.alloc(1e9)//1,000,000,000 bytes(1GB)

const b = Buffer.alloc(0.5e9)//500,000,000 bytes(500MB)
*/

console.log(constants.MAX_LENGTH)

const b = Buffer.alloc(8e8)//800,000,000 bytes(800MB)
setInterval(( ) => {
    for (let i=0;i<b.length;i++)
        b[i]=0x22;
},5000);