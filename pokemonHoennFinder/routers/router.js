'use strict'
var cors = require('cors')
const express = require("express");

var corsOptions = {
    origin: 'file:///C:/Users/Angad/Desktop/IoD_Projects/Lab-5-Backend/pokemonHoennFinder/index.html',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

module.exports = (app) => {
    //Root router
    let controller = require ("../controllers/controller.js")

    app.use(cors());
    app.use(express.static('./'))

    app.get("/", (req, res) => {
        res.sendFile('C:/Users/Angad/Desktop/IoD_Projects/Lab-5-Backend/pokemonHoennFinder/index.html');
    });

    app.route("/hoenn").get(controller.fetchHoennPokemon);
    app.route("/fetchPokemon").get(controller.fetchPokemon);
    
    //GET request
    app.get("/test", (req, res) => {
        res.send("Hello World 1 ");
    });



    // Handling 404 request from the client
    app.use((req, res, next) => {
        res.status(404).send("<h1>Page not found on the server</h1>");
    });

};