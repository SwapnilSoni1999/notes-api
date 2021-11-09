const User = require('../models/user')
const AppError = require('../lib/error')
const bcrypt = require('bcryptjs')

const getUser = async (username, password) => {
    const user = await User.findOne({ username })
    if (!user) {
        throw new AppError('Username or password is wrong!', 400)
    }
    if (bcrypt.compareSync(password, user.password)) {
        return user
    }
    throw new AppError('Username or Password is wrong!', 400)
}

const createUser = async (username, password) => {

    const user = await User.findOne({ username })
    if (user) {
        return await getUser(username, password)
    }
    const hashedPassword = bcrypt.hashSync(password)
    const newUser = await User.create({
        username,
        password: hashedPassword
    })
    return newUser
}

module.exports = {
    createUser,
    getUser
}