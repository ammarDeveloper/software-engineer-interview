const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/myDatabase'

mongoose.connect(MONGO_URI)
.then(() => console.log('Connected to mongoDB'))
.catch(err => console.error(err))

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: Number,
    password: {
        type: String,
        required: true
    },
    roles: {
        type: Array,
        default: ['customer']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const User = mongoose.model('User', userSchema);

async function getUsers({ id = null, page = 1, limit = 5, age = null, sortOptions = {} }) {
    try {
        const skip = (page - 1) * limit;
        let users;
        let filter = {}

        if (age) {
            filter.age = age;
        }


        if (!id) {
            const [usersArr, total] = await Promise.all([
                User.find(filter).sort(sortOptions).skip(skip).limit(limit),
                User.countDocuments(filter)
            ])
            users = {data: usersArr, total, totalPages: Math.ceil(total/limit)}
        } else {
            users = [await User.findById(id)];
        }
        return users;
    } catch (error) {
        throw new Error(`Error getting user: ${error.message}`)
    }
}

async function getUserByEmail(email) {
    try {
        const user = await User.findOne({ email })
        return user;
    } catch (error) {
        throw new Error(`Error getting user: ${error.message}`)
    }
}

async function createUser(payload) {
    try {
        const user = new User(payload);
        return await user.save();
    } catch (error) {
        throw new Error(`Error creating user: ${error.message}`)
    }
}

async function updateUser(id, payload, overwrite = false) {
    try {
        const updateData = overwrite ? payload : { $set : payload }
        const updated = await User.findByIdAndUpdate(
            id, 
            updateData, 
            { new : true, runValidators: true, overwrite }
        );
        return updated;
    } catch (error) {
        throw new Error(`Error updating user: ${error.message}`)
    }
}

async function deleteUser(id) {
    try {
        const deleted = await User.findByIdAndDelete(id);
        return deleted;
    } catch (error) {
        throw new Error(`Error deleting user: ${error.message}`)
    }
}

module.exports = {
    getUsers, createUser, updateUser, deleteUser, getUserByEmail
}