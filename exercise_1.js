//Slide 18 Exercise 1 (Express servers on different ports)

const express = require('express');
const app = express();
const app2 = express();


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(3000, function () {
    console.log("Node Server running on local host 3000")
});


app2.get('/', (req, res) => {
    res.send('Hello World 2');
});

app2.listen(4000, function () {
    console.log("Node Server running on local host 3000")
});

