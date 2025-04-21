const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase').then(() => console.log('connection establised'))
.catch(err => console.error('Something went wrong' + err.message));

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = new mongoose.model('User', UserSchema);

const addUser = async (payload) => {
    try {
        const user = new User(payload);
        await user.save();
    } catch (error) {
        throw new Error(`Could not add new user: ${error.message}`);
    }
}

const getUser = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user
    } catch (error) {
        throw new Error(`Could not get the user: ${error.message}`);
    }
}

module.exports = {
    addUser, getUser
}