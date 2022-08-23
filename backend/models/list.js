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
        required: true,
        unique: true,
        index: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    showInExplore: {
        type: Boolean,
        default: false,
    },
    logo: {
        type: String
    },
    listType: {
        type: String,
        enum: ['Expert', 'Company', 'Topic'],
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('List', listSchema); 