const { Router } = require('express')

const authRoutes = require('./routes/auth')
const noteRoutes = require('./routes/notes')

const router = Router()

// /api/auth
router.use('/auth', authRoutes)
router.use('/notes', noteRoutes)

module.exports = router
