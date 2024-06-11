const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();


mongoose.connect(`${process.env.MONGO_URL}`).then(()=>{console.log("Database connected")})
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean

})
const todo = mongoose.model('todos',todoSchema)
module.exports = {
    todo
}