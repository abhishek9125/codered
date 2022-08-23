const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Email is Required'],
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: [true, 'Passowrd is Required'],
    },
    role: {
        type: String,
        default: 'developer'
    },
    college: {
        type: String,
    },
    linkedInId: {
        type: String,
    },
    githubId: {
        type: String,
    },
    points: {
        type: Number,
        default: 0,
    },
    attempted: {
        type: Number,
        default: 0,
    },
    solved: {
        type: Number,
        default: 0,
    },
    currentStreak: {
        type: Number,
        default: 0,
    },
    longestStreak: {
        type: Number,
        default: 0,
    },
    contributionMap: [{
        date: Date,
        count: {
            easy: {
                type: Number,
                default: 0
            },
            medium: {
                type: Number,
                default: 0
            },
            hard: {
                type: Number,
                default: 0
            },
            radiant: {
                type: Number,
                default: 0
            }
        }
    }],
    problemsSolved: [{
        solved: {
            type: Boolean,
            default: false
        },
        problem: {
            type: ObjectId, 
            ref: 'Problem'
        }
     }],
    upvote: [{
        star: Number,
        postedBy: { type: ObjectId, ref: 'Problem' }
    }],
    attempted: [{
        solved: Boolean,
        postedBy: { type: ObjectId, ref: 'Problem' }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema); 