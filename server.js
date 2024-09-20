console.log("Web Server started!");
const express = require("express");
const app = express();
const http = require("http"); // core package

// 1: Entry code
app.use(express.json()); // json -> object

// 2: Session code

// 3: Views code (if we use ejs)

// 4: Router code
app.get("/", function (req, res) {
  res.end("Hello World!");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
