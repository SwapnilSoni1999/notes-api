const Note = require('../models/notes')
const AppError = require('../lib/error')

const createNote = async (title, desc) => {
    const note = await Note.create({
        title,
        desc
    })
    return note
}

const getNotes = async () => {
    return await Note.find({})
}

const getNoteById = async (noteId) => {
    const note = await Note.findOne({ _id: noteId })
    if (!note) {
        throw new AppError('Note not found!', 404)
    }
    return note
}

const modifyNote = async (noteId, payload) => {
    const note = await Note.findOne({ _id: noteId })
    if (!note) {
        throw new AppError('Note not found!', 404)
    }
    const { title, desc } = payload
    const query = {
        $set: {}
    }
    if (title) {
        query.$set.title = title
    }
    if (desc) {
        query.$set.desc = desc
    }
    return await Note.findOneAndUpdate({ _id: noteId }, query, { new: true })
}

const deleteNote = async (noteId) => {
    return await Note.deleteOne({ _id: noteId })
}

module.exports = {
    createNote,
    getNoteById,
    getNotes,
    modifyNote,
    deleteNote
}
