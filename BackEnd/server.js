const express = require("express");
require("dotenv").config({ path: "./config/.env" });

const app = express();

const port = process.env.PORT;

require("./routes/app.routes")(app);

app.listen(port, () => {
    console.log("Server is listening ...");
});