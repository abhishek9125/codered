const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    id: {
        type: Number,
        required: true
    },
    slug: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('List', listSchema); 