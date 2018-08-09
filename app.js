var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.static("imagens"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("main");
});

app.get("/quemsomos", function(req, res){
    res.render("apresentacao");
});

app.get("/produtos", function(req, res){
    res.render("produtos");
});

app.get("/ondenosencontrar", function(req, res){
    res.render("localizacao");
});

app.get("/contato", function(req, res){
    res.render("contato");
});

app.get("/massafresca", function(req, res){
    res.render("queijos/massafresca");
});

app.get("/massamole", function(req, res){
    res.render("queijos/massamole");
});

app.get("/massasemidura", function(req, res){
    res.render("queijos/massasemidura");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server is listening"); 
});