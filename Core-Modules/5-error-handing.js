const fs = require('fs');

// Error first callback pattern
function errorFirstCallBack() {
    fs.readFile('non-existing-file.txt', (err, data) => {
        if (err) {
            console.error('Error reading file' +err.message);
            return ;
        }
    
        console.log(data)
    })
}

// Try/Catach with async/await
async function readTextFile() {
    try {
        const content = await fs.promises.readFile('non-existing-file.txt', 'utf-8');
        console.log(content);
    } catch (error) {
        console.error(error.message);
    }
}

// Custom error message by using class
function customErrorHandling() {
    class ValidationError extends Error {
        constructor(message, field) {
            super(message);
            this.name = 'ValidationError'
            this.field = field
        }
    }

    function validateUser(user) {
        if (!user.email) {
            throw new ValidationError('Email field is required', 'email');
        }
        if (!user.password) {
            throw new ValidationError('password is not valid', 'password');
        }
    }

    try {
        validateUser({ email: 'asodklfjsaifj', password: null })
    } catch(error) {
        console.error(`The task failed with the following message: ${error.message} and the following field ${error.field}`);
    }
}

// errorFirstCallBack()
// readTextFile()
customErrorHandling();