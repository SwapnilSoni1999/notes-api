const AppError = require('../lib/error')
const UserService = require('../services/user')
const AuthService = require('../services/auth')

exports.signup = async (req, res, next) => {
    const { username, password } = req.body
    const user = await UserService.createUser(username, password)
    const token = AuthService.signToken(user.id)
    return res.status(200).json({ message: 'Signup success!', token })
}

exports.login = async (req, res, next) => {
    const { username, password } = req.body
    const user = await UserService.getUser(username, password)
    const token = AuthService.signToken(user.id)
    return res.status(200).json({ message: 'Login success!', token })
}
