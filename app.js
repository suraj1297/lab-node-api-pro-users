const express = require('express')
const app = express()
const port = 3000

const bodyParser = require("body-parser")
const cors = require("cors")
app.use(bodyParser.json())
app.use(cors({ origin: '*' }))

const user = require("./controller/controller")


app.use("/users", user)

app.listen(port, () => console.log(`App listening on port 3000!`))