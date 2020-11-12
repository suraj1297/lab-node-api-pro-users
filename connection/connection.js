const { model, mongo } = require("mongoose")
const mongoose = require("mongoose")

const url = `mongodb+srv://admin:root@testing.l4cpi.mongodb.net/prograd?retryWrites=true&w=majority`


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(response => console.log("Successfully established connection with database"))
    .catch(err => console.log(err))


module.exports = mongoose