const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/testDatabase"

mongoose.connect(url).then(() => {
    console.log('connection successful');
}).catch((err) => {
    console.log(err);
});

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Single field index
        index: true 
    },
    age: {
        type: Number,
    },
    status: {
        type: Number,
        enum: [1, 2],
        default: 1,
    },
    city: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    created_at: {
        type: Date
    }
})

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    }
});

UserSchema.index({ status: 1, created_at: -1 }) // Compound index
UserSchema.index({ title: 'text', content: 'text' }) // Text index

PostSchema.index({ tags: 1 }); // Create a multikey index on the 'tags' field

const User = mongoose.model('User', UserSchema);
const Post = mongoose.model('Post', PostSchema);

module.exports = {
    User, Post
}