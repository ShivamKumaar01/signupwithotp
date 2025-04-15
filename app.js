const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;



// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use(express.json()); 
app.use('/', require("./routes"));

app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`);
});