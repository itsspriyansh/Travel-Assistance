const app = require("./scrap/details")
const http = require("http")

const PORT = 5000 || process.env.PORT
const server = http.createServer(app)

server.listen(PORT, ()=>console.log("listening to port: " + PORT))

