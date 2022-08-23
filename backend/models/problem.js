const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 32,
        trim: true,
        required: true,
        text: true
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true
    },
    id: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        maxlength: 2000,
        text: true
    },
    averageTime: {
        type: Number,
        required: true,
    },
    category: [{
        type: ObjectId,
        ref: "Category"
    }],
    company: [{
        type: ObjectId,
        ref: "Company"
    }],
    list: [{
        type: ObjectId,
        ref: "List"
    }],
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard', 'Radiant']
    },
    averageTime: {
        type: Number,
        default: 0,
    },    
    averageTime: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Problem', problemSchema); 