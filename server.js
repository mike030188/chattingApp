console.log("Web Server started!");
const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

// 1: Entry code
app.use(express.json()); // json -> object
app.use(cors({ origin: "http://localhost:3001" }));

// 2: Session code

// 3: Views code (if we use ejs)

// 4: Router code
app.post("/api/message", function (req, res) {
  const { message } = req.body;
  if (message) {
    const responseMessage = message + " + Hello World!";
    res.json({ response: responseMessage });
  } else {
    res.status(400).json({ error: "Message not received" });
  }
});

app.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
