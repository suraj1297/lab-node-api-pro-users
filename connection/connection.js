const { model, mongo } = require("mongoose")
const mongoose = require("mongoose")

const url = process.env.URL


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(response => console.log("Successfully established connection with database"))
    .catch(err => console.log(err))


module.exports = mongoose
