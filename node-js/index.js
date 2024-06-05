const fs = require("fs");
const http = require("http");

const myServer = http.createServer((req,resp)=>{
    // console.log(req);
    // const log = `${Date.now()}:New Req Recived\n`;
    const log = `${Date.now()}: ${req.url} New Req Recived\n`;

    // fs.appendFile(`log.txt`,log,(err,date)=> {
    //     resp.end("<h1>Hello From Server</h1>");
    // });
    fs.appendFile(`log.txt`,log,(err,date)=> {
        switch(req.url){
            case'/':resp.end("Home Page");
            break;
            case '/about':resp.end("I am Rinku Maurya ")
            break;
            default:
                resp.end("404 Not Found!!!")

        }})
     





  });
myServer.listen(8000,()=>console.log("Server started"));