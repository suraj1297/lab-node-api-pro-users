const mongoose = require("../connection/connection")

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: Number,
    prograd_id: Number,
    squad: Number
})


const User = mongoose.model("user", UserSchema)

module.exports = User

