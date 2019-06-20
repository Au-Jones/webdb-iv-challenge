const express = require('express');
const helmet = require('helmet')

// const tracksRouter = require('../tracks/tracks-router.js')

const server = express();

server.get(helmet());
server.use(express.json());
// server.use('/api/tracks', tracksRouter)

server.get('/', (req, res) => {
    res.status(200).json(('hello world'))
})

module.exports = server;