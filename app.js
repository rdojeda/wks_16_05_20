const express = require("express")

const server = express()

const docs = express.static("docs")

server.use( docs )

server.get("index.html", function (request, response) {
    response.end("Hola desde Node.JS + Express");

})
// server.post()

server.listen(2000)