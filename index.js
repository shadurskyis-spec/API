const http = require("http");
const fs = require('fs');
const path = require('path');

const directoryPath = './data';

const server = http.createServer((req, res) => {
    
    const resultArray = [];


    const files = fs.readdirSync(directoryPath);


    for (let i = 0; i < files.length; i++) {
        const filePath = path.join(directoryPath, files[i]);
        const fileContent = fs.readFileSync(filePath);

        
        const buffer = Buffer.from(fileContent);
        const obj = JSON.parse(buffer.toString());

        resultArray.push(obj);
    }

    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(resultArray)); 
});

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
