const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({

    description: {
        type: String,
        required: false
    },
    datetime: {
        type: Date,
        required: false
    },
    studentlevel: {
        type: String,
        required: false
    },
    numofexpectedstudents: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    school_name: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    resourcedescription: {
        type: String,
        required: false
    },
    resourcetype: {
        type: String,
        required: false
    },
    resourcenum: {
        type: String,
        required: false
    },
    requestID: {
        type: String,
        required: false
    },
    requesttype: {
        type: String,
        required: false
    },
    requestdate: {
        type: Date,
        required: false
    },
    remarks: {
        type: String,
        required: false
    },
    volunteerUsername: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Request', requestSchema);
