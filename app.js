const express = require("express")

const server = express()

const docs = express.static("docs")

server.use( docs )

// server.post()

server.listen(2000)