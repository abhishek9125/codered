const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "Important for FAANG Interviews"
    },
    id: {
        type: Number,
        required: true,
        index: true
    },
    position: {
        type: Number,
        default: 0,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    isParent: {
        type: Boolean,
        default: false,
    },
    categories: [{
        type: ObjectId,
        ref: 'Category'
    }],
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema); 