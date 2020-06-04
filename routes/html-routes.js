const express = require("express")
const router = require("express").Router();
let path = require("path");

router.get("/", function(request, response) {
    response.sendFile(path.join(__dirname,"../public/index.html"));
});

router.get("/exercise", function(request, response) {
    response.sendFile(path.join(__dirname,"../public/exercise.html"));
});

router.get("/stats", function(request, response) {
    response.sendFile(path.join(__dirname,"../public/stats.html"));
});

module.exports = router;