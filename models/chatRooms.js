const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentChatSchema = new Schema({
    user1: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    user2: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    logs: [{
        type: Schema.Types.ObjectId,
        ref: 'UserMessage'
    }]
}, {
    timestamps: true
} );