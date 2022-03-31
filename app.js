const express = require("express")
const PORT = 9000

const app = express()

app.use((req, res, next) => {
    console.log("neue request", req.method, req.url)
    next()
})

app.use(express.static('view'))
app.use('/public', express.static('public'))

app.use((_, res) => {
    res.status(404)
    res.sendFile(__dirname + "/view/error.html")
})

app.listen(PORT, () => console.log("Server listening on Port", PORT))