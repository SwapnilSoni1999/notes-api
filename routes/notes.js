const { Router } = require('express')
const verifyToken = require('../middlewares/verifyToken')
const Note = require('../controllers/note')
const catchAsync = require('../utils/catchAsync')

const router = Router()

router.use(verifyToken)

router
    .route('/')
    .get(catchAsync(Note.getNotes))

router
    .route('/:noteId')
    .get(catchAsync(Note.getById))
    .delete(catchAsync(Note.deleteNote))

router
    .route('/create')
    .post(catchAsync(Note.createNote))

router
    .route('/edit/:noteId')
    .patch(catchAsync(Note.modifyNote))

module.exports = router
