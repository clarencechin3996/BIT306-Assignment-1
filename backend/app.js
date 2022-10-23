const express = require('express')
const bodyParser = require('body-parser')
const Request = require('./models/request')
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://origio:hN2Ml3vPZPpcL5Sx@cluster0.jrzyarp.mongodb.net/node-angular?retryWrites=true&w=majority")
    .then(() => {
        console.log('connected to database');
    })
    .catch(() => {
        console.log('connection failed');
    });

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requesed-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.post("/api/posts", (req, res, next) => {
    const request = new Request({
        description: req.body.description,
        datetime: req.body.datetime,
        studentlevel: req.body.studentlevel,
        numofexpectedstudents: req.body.numofexpectedstudents,
        status: req.body.status,
        school_name: req.body.school_name,
        city: req.body.city,
        resourcedescription: req.body.resourcedescription,
        resourcetype: req.body.resourcetype,
        resourcenum: req.body.resourcenum,
        requestID: req.body.requestID,
        requesttype: req.body.requesttype,
        requestdate: req.body.requestdate,
        remarks: req.body.remarks,
        volunteerUsername: req.body.volunteerUsername
    });
    request.save();
    //const post = req.body;

    console.log(request);
    res.status(201).json({
        message: 'Request added successfully'
    });
});

app.get('/api/posts', (req, res, next) => {
    Request.find().then(documents => {
        res.status(200).json({
            message: 'Post fetched successfully',
            posts: documents
        });
    })
});

app.delete('/api/posts/:id', (req, res, next) => {
    Request.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Request deleted!" });
    })
});



module.exports = app;
