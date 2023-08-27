const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userMessageSchema = new Schema({
    sender,
    
    logs: [{
        type: Schema.Types.ObjectId,
        ref: 'UserMessage'
    }]
}, {
    timestamps: true
} );