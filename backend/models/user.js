const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    occupation: {
        type: String,
        required: false
    },
    dob: {
        type: Date,
        required: false
    },
    staffID: {
        type: String,
        required: false
    },
    position: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: true
    }

});


userSchema.plugin(uniqueValidator);


module.exports = mongoose.model('User', userSchema);