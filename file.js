const fs = require("fs")

// // sync call
// // . mean  current dir
// // fs.writeFileSync('./test.txt',"hello world")


// // async 

// // fs.writeFile("context.txt","Hello everyone to all my friend ",(err)=>{

// // });

// fs.readFile('./context.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }else {
//         console.log(result)
//     }
// })
// //  console.log(result);


fs.appendFileSync("./text.txt",`${Date.now()}hey there\n`);
fs.cpSync('./text.txt',"./copy.txt")
fs.unlinkSync('./copy.txt')
fs.statSync('./text.txt')

console.log( fs.statSync('./text.txt').isFile()
);


fs.mkdirSync("my-doc/a/v")