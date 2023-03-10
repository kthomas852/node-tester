//This tutorial will be about node backends and express
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const dir = path.join(__dirname, 'public');
app.use(express.static(dir));
app.get("/ping", (req, res)=>{
    console.log("My Ping Url Hit: " + req.method + ' to ' + req.headers.host + req.url);
    res.send("URL Hit: " + req.method + ' to ' + req.headers.host + req.url);
});

app.listen(PORT, ()=> console.log(`Now listening on port ${PORT}`));