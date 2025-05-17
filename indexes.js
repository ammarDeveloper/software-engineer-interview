const { User, Post } = require('./db');
const mongoose = require('mongoose');

async function SingleFieldIndex() {
    try {
        // checks if we are doing COLLSCAN OR IDXSCAN (index)
        // const response = await User.findOne( { email: 'mwerrit0@a8.net' }).explain("executionStats");;
        // console.log(response.queryPlanner.winningPlan.inputStage);

        const response = await User.findOne({ email: 'mwerrit0@a8.net' })
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}

async function CompoundIndex() {
    try {
        // check if the indexes are added
        // const result = await User.find({ status: "1" }).sort({ created_at: -1 }).limit(10).explain("executionStats");
        // console.dir(result, { depth: null });
        const users = await User.find({ status: "1" }).sort({ createdAt: -1 }).limit(10);
        console.log(users);
    } catch (error) {
        console.log(error.message);
    }
}

async function addDataInPost() {
    try {
        const response = await Post.create([
            {
                title: 'Node.js Tips',
                content: 'Useful Node.js tips.',
                tags: ['node', 'backend', 'javascript']
            },
            {
                title: 'Frontend Guide',
                content: 'React and CSS tricks.',
                tags: ['frontend', 'css', 'react']
            },
            {
                title: 'Full Stack Dev',
                content: 'How to become full stack.',
                tags: ['node', 'react', 'career']
            }
        ])
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}

async function MultiKeyIndex() {
    try {
        // check if its using index
        // const result = await Post.find({ tags: "node" }).explain("executionStats");
        // console.dir(result, { depth: null });

        // check the index fields
        // const indexes = await mongoose.connection.db.collection('posts').indexes();
        // console.log(indexes);

        const posts = await Post.find({ tags: "node" });
        console.log(posts);
    } catch (error) {
        console.log(error.message);
    }
}

async function TextIndex() {
    try {
        const users = await User.find(
            { $text: { $search: "Office" } }
        )
        // await mongoose.connection.db.collection('users').dropIndex("title_text_content_text");
        // const indexs = await mongoose.connection.db.collection('users').indexes();
        // console.log(indexs);
        console.log(users)
    } catch (error) {
        console.log(error.message);
    }
}

// SingleFieldIndex();
// CompoundIndex();
// addDataInPost();
// MultiKeyIndex();
TextIndex();
