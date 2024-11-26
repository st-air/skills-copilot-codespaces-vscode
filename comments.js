// Create web server
// Create a web server that listens on port 3000. When it receives a request, it should respond with a JSON object that represents a comment. The comment should have the following properties:

// id: a unique number that starts at 1 and increments by 1 each time a new comment is created
// username: the value of the username query parameter
// comment: the value of the comment query parameter
// timestamp: the current date and time in ISO format
// The comment should be created using the following route:

// GET /comments
// The server should respond with a JSON object that represents a comment. The comment should have the following properties:

// id: a unique number that starts at 1 and increments by 1 each time a new comment is created
// username: the value of the username query parameter
// comment: the value of the comment query parameter
// timestamp: the current date and time in ISO format
// The server should increment the id each time a new comment is created. The server should also respond with a 400 status code if the username or comment query parameters are missing.

const express = require('express');
const app = express();

let comments = [];
let id = 1;

app.get('/comments', (req, res) => {
    const username = req.query.username;
    const comment = req.query.comment;

    if (!username || !comment) {
        res.status(400).send();
    } else {
        comments.push({
            id: id,
            username: username,
            comment: comment,
            timestamp: new Date().toISOString()
        });

        res.json({
            id: id,
            username: username,
            comment: comment,
            timestamp: new Date().toISOString()
        });

        id++;
    }
});

app.listen(3000);