const express = require('express');
const router = require('./Routes/userRoutes');
const rateLimit = require('express-rate-limit');
const { swaggerSpec, swaggerUi } = require('./swagger')

const app = express();

const apiLimiter = rateLimit({
    windowMs: 1 * 30 * 1000,
    max: 10,
    message: {
        status: 429,
        message: 'Too many requests, please try again later'
    }
})

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/api', apiLimiter)

app.use('/api', router)

// Error handling middleware
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        return res.status(400).send({
            error: 'Validation error',
            details: err.message
        })
    }

    if (err.name === 'UnauthorizedError') {
        return res.status(401).send({
            error: 'Unauthorized',
            detials: 'Valid authentication token required'
        })
    }

    // Default error 
    res.status(500).send({
        error: 'Server error',
        details: `${process.env.NODE_ENV === 'production' ? 'An unexpected error' : err.message}`
    })
})

app.listen(3000, () => {
    console.log('Server listing to 3000');
})

