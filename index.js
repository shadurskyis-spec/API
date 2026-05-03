let http = require("http");

const server = http.createServer((req,res)=>{
    getAllJokes(req,res);
})
server.listen(5000);