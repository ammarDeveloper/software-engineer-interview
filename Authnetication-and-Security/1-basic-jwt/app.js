const express = require('express');
const { addUser, getUser } = require('./db');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

app.post('/api/users', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({success: false, message: 'Bad request'});
        }

        await addUser({ name, email, password});

        res.status(200).json({ 
            success: true,
            message: 'User is registred'
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: 'Unknown error occured'
        })
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) return res.status(400).json({
            success: false,
            message: 'Bad request'
        })
    
        const user = await getUser(email);

        if (!user) {
            throw new Error('No user found!');
        }

        const token = jwt.sign({ userEmail: user.email }, 'my-key', {
            expiresIn: '1h'
        })
        
        res.status(200).json({
            success: true,
            token,
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: 'No user found!' 
        })
    }
})

app.listen(3000, () => {
    console.log(`Server is running on 3000 port`);
})