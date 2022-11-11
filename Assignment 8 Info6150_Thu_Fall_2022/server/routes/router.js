const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

// const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */

/*
@description Root Route
*/

route.get('/', services.homeRoutes);

route.get('/add-user', (req,res) => {
    res.render('add_user');
});

route.get('/update-user', (req,res) => {
    res.render('update_user');
});

route.post('/api/users/create', controller.create);

route.get('/api/users/getAll', controller.find);

// API

route.put('/api/users/edit/:id', controller.update);

route.delete('/api/users/delete/:id', controller.delete);

// /**
//  *  @description add users
//  *  @method GET /add-user
//  */
// route.get('/add-user', services.add_user)

// /**
//  *  @description for update user
//  *  @method GET /update-user
//  */
// route.get('/update-user', services.update_user)

// API

// route.get('/api/users', controller.find);
// route.put('/api/users/:id', controller.update);
// route.delete('/api/users/:id', controller.delete);

module.exports = route