const mongoose = require('mongoose');
const User = require('./db');

async function getUsers() {
    try {
        const users = await User.find({
            age: { $gt: 25 },
            status: { $eq : null }
        });
        
        console.log(users);
    } catch (error) {
        console.log(error.message);
    }
}

async function complexFilter() {
    try {
        const users = await User.find({
            age: { $gte: 18, $lte: 50 },
            city: { $in: ["New York", "San Francisco", "Issy-les-Moulineaux"] }
        });
        
        console.log(users);
    } catch (error) {
        console.log(error.message);
    }
}

async function Projection() {
    try {
        const users = await User.find(
            { email: { $eq: 'mwerrit0@a8.net' } }, 
            { name: 1 } );
        console.log(users);
    } catch (error) {
        console.log(error.message);
    }
}

async function Sorting() {
    try {
        const users = await User.find(
            { age: { $gte: 10, $lte: 20 } },
            { name: 1, age: 1 }
        ).sort({ name: 1 })
        .limit(10);
        console.log(users);
    } catch (error) {
        console.log(error.message);
    }
}

async function SortingAndPagination() {
    const limit = 10;
    const page = 2;
    try {
        const users = await User.find(
            { age: { $gte: 10, $lte: 20 } },
            { name: 1, age: 1 }
        ).sort({ name: 1 })
        .skip((page - 1) * limit)
        .limit(limit);
        console.log(users);
    } catch (error) {
        console.log(error.message);
    }
}

async function TextSearch() {
    try {
        await User.collection.createIndex({ title: "text" });

        
        // 🔍 Optional: Check current indexes
        const indexes = await mongoose.connection.db.collection('users').indexes();
        console.log("Indexes:", indexes);

        const users = await User.find({
            $text: { $search: "Mauris" }
        })
        console.log(users);
    } catch (error) {
        console.log(error.message);
    }
}

// getUsers();
// complexFilter();
// Projection();
// Sorting();
// SortingAndPagination();
TextSearch();