const mongoose = require('mongoose');

const schoolSchema = mongoose.Schema({

    schoolname: {
        type: String,
        required: false
    },
    schooladdress: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model('School', schoolSchema);