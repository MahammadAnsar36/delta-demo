const express = require("express");
const app = express();

const port = 8080;

app.set("view engine","ejs");

app.get("/",(req,res)=> {
    res.render("home.ejs");
})

app.listen(port , () => {
    console.log(`listening on port ${port}`);
});

app.get("/ig/:username", (req,res)=>{
    let { username } = req.params;
    res.render("instagram.ejs", {username});
})