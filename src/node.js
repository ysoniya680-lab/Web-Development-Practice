const http = require("http");
const url = require("url");

const main = (req, res) => {
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.pathname;

    if (path == "/") {
        res.write("Welcome to Node JS server!\n");
        res.end("This is my second page");
    } 
    else if (path == "/about") {
        res.write("Welcome to about page");
        res.end("This is my about page");
    }
    else {
        res.statusCode = 404;
        res.end("Page not found");
    }
};

const server = http.createServer(main);

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});