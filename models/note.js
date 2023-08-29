const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        maxlength: 30,
    },
    text: {
        type: String,
        required: true,
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    },
    credit: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);