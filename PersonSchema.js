const mongoose = require('mongoose')
const { Schema } = mongoose;

const PersonSchema = Schema({
    Name : {
        type : String,
        required : true
    },
    Age : {
        type : String,
        required : true
    },
    CreateTime : {
        type : Date,
        default : Date.now 
    }
})

 module.exports = mongoose.model('persons',PersonSchema);