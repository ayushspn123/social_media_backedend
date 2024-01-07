const express = require("express");
const dbConnect = require("./config/connection.js");
const app = express();
const port = 3000;


app.use(express.json());
const blog = require("./routes/blog.js");



app.use("/api/v1",blog)


 
app.listen(port, console.log(`server is running ${port}`))
dbConnect();
