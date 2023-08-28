const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AiChatSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    logs: [{
        messageType: {
            type: String,
            enum: ['user', 'ai'],
            required: true
        },
        message: {
            type: Schema.Types.ObjectId,
            ref: 'Message'
        }
    }]
}, {
    timestamps: true
} );

AiChatSchema.virtual('logs.messageDoc', {
    ref: 'Message',
    localField: 'logs.message',
    foreignField: '_id',
    justOne: true
});

module.exports = mongoose.model('AiChat', AiChatSchema);