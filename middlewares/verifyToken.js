const AuthService = require('../services/auth')
const AppError = require('../lib/error')

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.trim()
        if (!token) {
            return next(new AppError('Not Authorized!', 401))
        }
        const { id } = AuthService.verifyToken(token)
        req.userId = id
        next()
    } catch (error) {
        return next(new AppError(error.message, 401))
    }
}

module.exports = verifyToken