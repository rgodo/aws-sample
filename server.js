const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello world with express in EC2!</h1>');
});

app.listen(8080);

console.log("server on port 8080");