const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
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
        index: true
    },
    slug: {
        type: Number,
        required: true,
        unique: true,
    },
    isParent: {
        type: Boolean,
        default: false,
    },
    categories: [{
        type: id,
        ref: 'Category'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema); 