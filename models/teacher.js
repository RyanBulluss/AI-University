const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Subject = require('./subject')

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    seed: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Teacher', teacherSchema);