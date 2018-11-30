const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')

routes.get('/', (req, res) => res.render('auth/signup'))
routes.get('/signup', (req, res) => UserController.create)

module.exports = routes
