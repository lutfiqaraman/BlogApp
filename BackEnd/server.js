require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const cors = require("cors");

const app = express();

let corsOptions = {
  origin: [
    "http://localhost:4200", 
    "http://localhost:4000"
  ],
};

app.use(cors(corsOptions));

const port = process.env.PORT;

require("./routes/app.routes")(app);

app.listen(port, () => {
  console.log("Server is listening ...");
});
