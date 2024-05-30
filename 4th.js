console.log("A");

process.nextTick(( ) => {
    console.log("B");
}); ///When we want to run something after the execution
console.log("C");
console.log("D");
console.log("F");