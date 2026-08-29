const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>🚀 Rahil App Server</h1><p>Request Nginx ke through aayi hai.</p>");
});

server.listen(3000, () => {
  console.log("App running on port 3000");
});
