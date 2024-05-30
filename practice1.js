const { Buffer } = require("buffer");
/*
const buff = Buffer.alloc(3);

buff[0]=0x48;
buff[1]=0x69;
buff[2]=0x21;

console.log(buff);


const buff = Buffer.from("string","utf-8");
console.log(buff);



const buff = Buffer.from([0x48,0x69,0x21]);
console.log(buff.toString("utf-8"));



const buff = Buffer.from("486921","hex");
console.log(buff.toString("utf-8"));
*/

const buff = Buffer.from("E0A49B","hex");
console.log(buff.toString("utf-8"));