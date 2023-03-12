const http = require("http");

const server = http.createServer((req, res)=> {
    console.log("Server is created")
})

const port = 8000;

server.listen(port, ()=> 
    console.log(`Server is running on port ${port}`))