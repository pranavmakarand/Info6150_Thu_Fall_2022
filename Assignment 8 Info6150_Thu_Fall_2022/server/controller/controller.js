var Userdb = require('../model/model');

var errorFlag = false;

console.log("I have entered controller");

function IsPasswordWeak(password) {

    var regex = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&*]).{8,}$/;
    if (!regex.test(password)) {
        return false;
    }
    else {
        return true;
    }
}

function IsEmail(emailid) {
    var regex = /[a-z0-9]+@northeastern.edu/;
    if (!regex.test(emailid)) {
        return false;
    }
    else {
        return true;
    }
}

function ValidUserName(userName) {

    var nameRegex = /[a-zA-Z\-]+$/;
    if (!nameRegex.test(userName)) {
        return false;
    }
    else {
        return true;
    }
}

// create and save new user
exports.create = (req, res) => {

    // validate request
    console.log(req.body)
    if (!req.body) {
        res = res.status(400).send({ message: "Content can not be emtpy!" });
        res.message = "Content can not be emtpy!";
        return;
    }

    // new user
    const user = new Userdb({
        email: req.body.email,
        password: req.body.password,
        fullname: req.body.fullname
    })

    console.log(user.email)
    if (!IsEmail(user.email)) {
        res.status(400).send({
            message: "Wrong Email format please retry with northeastern domain"
        });
        return;
    }

    if (!IsPasswordWeak(user.password)) {
        res.status(400).send({
            message: "Weak password please make it strong"
        });
        return;
    }

    if (!ValidUserName(user.fullname)) {
        res.status(400).send({
            message: "Your user name is not valid. Only characters A-Z, a-z and '-' are  acceptable."
        });
        return;
    }

    // save user in the database
    user
        .save(user)
        .then(data => {
            console.log(user.email)
            console.log(data)
            res.send(data)
            // res.redirect('/add-user');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });
}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;

        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Erro retrieving user with id " + id })
            })

    } else {
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
            })
    }
}

// Update a new idetified user by user id
exports.update = (req, res) => {

    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    console.log(req.body)

    var password = req.body.password
    var fullname = req.body.fullname

    if (!IsPasswordWeak(password)) {
        res.status(400).send({
            message: "Weak password please make it strong"
        });
        return;
    }

    if (!ValidUserName(fullname)) {
        res.status(400).send({
            message: "Your user name is not valid. Only characters A-Z, a-z and '-' are  acceptable."
        });
        return;
    }

    var inputEmail = req.query

    Userdb.findOneAndUpdate(inputEmail, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${inputEmail}. Maybe inputEmail is wrong` })
            } else {
                res.send({
                    message: "User was updated success!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}

// Delete a user with specified user id in the request
exports.delete = (req, res) => {

    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    console.log(req.body)

    var inputEmail = req.query

    Userdb.findOneAndDelete(inputEmail, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${inputEmail}. Maybe inputEmail is wrong` })
            } else {
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}

