const fs = require("fs");
const http = require("http");
const url = require("url");

const myServer = http.createServer((req,resp)=>{
    if(req.url==="/favicon") return resp.end();

    // console.log(req);
    // const log = `${Date.now()}:New Req Recived\n`;
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Recived\n`;
    const myUrl=url.parse(req.url,true);
    console.log(myUrl);
    // fs.appendFile(`log.txt`,log,(err,date)=> {
    //     resp.end("<h1>Hello From Server</h1>");
    // });
    fs.appendFile(`log.txt`,log,(err,date)=> {
        switch(req.url){
            case'/':resp.end("Home Page");
            break;
            case '/about':
                const username = myUrl.query.myname;

                resp.end(`Hii, ${username}`)
            break;

            case '/search':
                const search= myUrl.query.search_query;
                resp.end("Here are your result for " + search);
            case '/signup':
                if(req.method==="GET")resp.end("This is a signup Form ");
                else if(req.method === "POST"){
                    // DB Query
                    resp.end("Success");
                }
            default:
                resp.end("404 Not Found!!!")

        }})
     





  });
myServer.listen(8000,()=>console.log("Server started"));