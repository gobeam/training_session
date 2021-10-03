const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  let content = "";
  let statusCode = 200;
  switch (request.url) {
    case "/":
      content = "<h1>This is root page</h1>";
      break;
    case "/profile":
      content = "<h1>This is profile page</h1>";
      break;
    case "/about":
      content = "<h1>This is about page</h1>";
      break;
    default:
      content = "<h1>This is 404 page</h1>";
      statusCode = 404;
  }

  response.writeHead(statusCode, { "Content-Type": "text/html" });
  response.write(content);
  response.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
