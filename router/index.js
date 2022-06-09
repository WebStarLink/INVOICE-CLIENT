const Roter = require('express').Router
const UserController = require('../controllers/userController')
const routes = new Roter()
const {body} = require("express-validator")
const authMiddleware = require('../middlewares/authMiddleware')

routes.post('/registration', 
body('email').isEmail(),
body("password").isLength({min: 4, max: 32}),
UserController.registration)
routes.post('/login', UserController.login)
routes.post('/logout', UserController.logout)
routes.put('/profile', authMiddleware, UserController.profile)
routes.get('/activate/:link', UserController.activate)
routes.get('/refresh', UserController.refresh)
routes.get('/users', authMiddleware, UserController.users)

module.exports = routes