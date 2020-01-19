var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Routes

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var info = {burgers: data};
        console.log(info)
        res.render("index", info)
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/cats/:id", function(req, res){
    var devoured = "id = " + req.params.id;
    console.log()

});








module.exports = router;