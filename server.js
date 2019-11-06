// get express 
const express = require('express');

// get posts router 
const postsRouter = require('./routers/posts-router.js')

// create server object 
const server = express();

// attach server to json via express 
server.use(express.json());

server.use('/api/posts', postsRouter);

// get from the root / 
server.get('/', (request, response) => {
    response.status(418)
    response.send("Hello from the internet")
});

// send the server out 
module.exports = server;