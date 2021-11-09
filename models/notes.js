const { Schema, model } = require('mongoose')

const NoteSchema = new Schema({
    title: { type: String, required: true, trim: true },
    desc: { type: String, required: true, trim: true }
}, {
    timestamps: true
})

const NoteModel = model('Note', NoteSchema, 'notes')

module.exports = NoteModel
