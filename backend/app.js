const express = require('express')
const bodyParser = require('body-parser')
const Request = require('./models/request')
const School = require('./models/school')
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const checkAuth = require('./middleware/check-auth');
const User = require("./models/user");

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
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requesed-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.post('/api/user/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash,
                fullName: req.body.fullName,
                phone: req.body.phone,
                occupation: req.body.occupation,
                dob: req.body.dob,
                staffID: req.body.staffID,
                position: req.body.position,
                schoolname: req.body.schoolname,
                role: req.body.role
            });
            user.save()
                .then(result => {
                    res.status(201).json({
                        message: 'User created',
                        result: result
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
        });
});

app.post('/api/user/login', (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            fetchedUser = user
            return bcrypt.compare(req.body.password, user.password)
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            const token = jwt.sign({
                    email: fetchedUser.email,
                    userId: fetchedUser._id
                },
                "secret_this_should_be_longer", {
                    expiresIn: '1h'
                });
            res.status(200).json({
                token: token,
                loginUserRole: fetchedUser.role,
                loginUser: fetchedUser
            })
        })
        .catch(err => {
            return res.status(500).json({
                message: 'Auth failed'
            });
        })
})


app.post("/api/requests", (req, res, next) => {
    const request = new Request({
        description: req.body.description,
        datetime: req.body.datetime,
        studentlevel: req.body.studentlevel,
        numofexpectedstudents: req.body.numofexpectedstudents,
        request_status: req.body.request_status,
        offer_status: req.body.offer_status,
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

app.post("/api/schools", (req, res, next) => {
    const school = new School({
        schoolname: req.body.schoolname,
        schooladdress: req.body.schooladdress,
        city: req.body.city
    });
    school.save();

    console.log(school);
    res.status(201).json({
        message: 'School added successfully'
    })
})

app.get('/api/requests', (req, res, next) => {
    Request.find().then(documents => {
        res.status(200).json({
            message: "Request fetched successfully",
            requests: documents
        })
    })
});

app.get('/api/schools', (req, res, next) => {
    School.find().then(documents => {
        res.status(200).json({
            message: "School fetched successfully",
            schools: documents
        })
    })
});

app.get('/api/user', (req, res, next) => {
    User.find().then(documents => {
        res.status(200).json({
            message: "User fetched successfully",
            user: documents
        })
    })
});

app.get("/api/close/:id", (req, res, next) => {
    const id = req.params.id
    console.log(id)
    Request.findById(id).then((request) => {
        console.log(request);
        Request.updateOne({ _id: id }, { $set: { "request_status": "CLOSED" } }).then((req) => {
            res.status(200).json({
                message: "User fetched successfully",
                req: req,
            });
        })
    });
});
app.get("/api/accept/:id", (req, res, next) => {
    const id = req.params.id
    console.log(id)
    Request.findById(id).then((request) => {
        console.log(request);
        Request.updateOne({ _id: id }, { $set: { "offer_status": "ACCEPTED" } }).then((req) => {
            res.status(200).json({
                message: "User fetched successfully",
                req: req,
            });
        })
    });
});


module.exports = app;