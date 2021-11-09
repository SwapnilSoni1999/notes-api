const jwt = require('jsonwebtoken')

const signToken = (userId) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET)
    return token
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = {
    signToken,
    verifyToken
}
