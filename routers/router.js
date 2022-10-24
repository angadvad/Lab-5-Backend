'use strict'

module.exports = (app) => {
    //Root router
    let calculator = require ("../controllers/CalculatorController.js")
    app.get("/", (req, res) => {
        res.send("Main Page");
    });

    app.route("/operation/add").get(calculator.addOperation);
    app.route("/operation/subtract").get(calculator.subtractOperation);
    app.route("/operation/multiply").get(calculator.multiplyOperation);
    app.route("/operation/divide").get(calculator.divideOperation);
    app.route("/operation/addByList").get(calculator.addByList);

    //app.route("/operation/bedmas").get(calculator.bedmas);

    
    //GET request
    app.get("/test", (req, res) => {
        res.send("Hello World 1");
    });

    // Handling 404 request from the client
    app.use((req, res, next) => {
        res.status(404).send("<h1>Page not found on the server</h1>");
    });

};