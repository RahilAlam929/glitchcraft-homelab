const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>🌐 Rahil Second App</h1><p>This is my second application.</p>");
});

server.listen(3001, () => {
  console.log("Second app running on port 3001");
});
