const { Router } = require('express')
const Auth = require('../controllers/auth')
const catchAsync = require('../utils/catchAsync')

const router = Router()

router
    .route('/signup')
    .post(catchAsync(Auth.signup))

router
    .route('/login')
    .post(catchAsync(Auth.login))

module.exports = router
