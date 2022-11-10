const mongoose = require('mongoose');

console.log("connect baby");

var schema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type : String,
        required: true
    },
    fullname : {
        type : String,
        required: true
    }
})

console.log("connect qrt")

const Userdb = mongoose.model('usermanagement', schema);

module.exports = Userdb;