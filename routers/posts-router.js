// import express, router and data 
const express = require('express');
const router = express.Router();
const db = require('../data/db.js');

router.jet('/', (request, response) => {
    db.find(request.query)
    .then(posts => {
        response.status(200).json(posts);
    })
    .catch(error => {
        console.log(error);
        response.status(500).json({ message: 'The posts information could not be retrieved.'});
    });
})