const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userMessageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
} );

module.exports = mongoose.model('UserMessage', userMessageSchema);