const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotebookSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        enum: ['📘', '📗', '📙', '📕', '📒', '🔢', '🗺️', '🧪', '👨‍🍳', '🧠', '👩‍🔬', '👨‍💻', '⚽', '🎨'],
        default: '📘',
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Notebook', NotebookSchema);