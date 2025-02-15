const express = require("express")
const api = require("./routes/api")

const port = process.env.PORT || 3000

const app = express()
app.use(express.static("public"))
app.use("/", api)
const __path = process.cwd()

app.get('/', (req, res) => {
    res.sendFile(__path + '/view/home.html')
})

app.get('/dasboard', (req, res) => {
    res.sendFile(__path + '/view/docs.html')
})

app.listen(port, () => {
 console.log(`app running at http://localhost:${port}`)
})