const { Console } = require('console');
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1>This is Arpit</h1> <p>Hey I am studying nodejs</p>')
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>About</h1> <p>Hey I am studying nodejs</p>')
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        // res.arpit(); //If u want to crash the server(funcn not available)
        res.statusCode = 404;
    }
    // res.end('<h1>This is Arpit</h1>');
})

server.listen(port, ()=>{
    console.log(`Server is listening port ${port}`);
});