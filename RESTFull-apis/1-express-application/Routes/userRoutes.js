const router = require('express').Router();
const { getUsers, createUser, updateUser, deleteUser, getUserByEmail } = require('../db');
const jwt = require('jsonwebtoken');


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: age
 *         schema:
 *           type: integer
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/users', async (req, res) => {
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const age = parseInt(req.query.age);
        const { sort, order } = req.query;
        let sortOptions = {}

        if (sort && order) {
            sortOptions[sort] = order === 'desc' ? -1 : 1;
        }
        const users = await getUsers({ page, limit, age, sortOptions });
        if (!users) {
            return res.status(404).send({ message: 'No users found' });
        }

        return res.status(200).send({ users: users })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const users = await getUsers(id);
        if (!users) {
            return res.status(404).send({ message: 'No users found' });
        }

        return res.status(200).send({ users: users })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/users', async (req, res) => {
    try {
        const { name, email, age, password, roles } = req.body;

        if (!name || !email || !age || !password) {
            return res.status(400).json({ message: 'Invalid parameters' })
        }

        const savedUser = await createUser({ name, email, age, password, roles });

        if (!savedUser) {
            return res.status(404).send({ message: 'User could not be saved' });
        }

        return res.status(201).send({ user: savedUser })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.patch('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;

        if (!payload || Object.keys(payload).length === 0) {
            return res.status(400).json({ message: 'Invalid parameters' })
        }

        const updatedUser = await updateUser(id, payload);

        if (!updatedUser) {
            return res.status(404).send({ message: 'User could not be updated' });
        }

        return res.status(201).send({ user: updatedUser })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age, password, roles } = req.body; 

        if (!name || !email || !age || !password) {
            return res.status(400).json({ message: 'Invalid parameters' })
        }

        const updatedUser = await updateUser(id, {name, email, age, password, roles}, true);

        if (!updatedUser) {
            return res.status(404).send({ message: 'User could not be updated' });
        }

        return res.status(201).send({ user: updatedUser })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await deleteUser(id);
        
        return res.status(204).send({ deletedUser })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Invalid request' })
        }

        const user = await getUserByEmail(email);

        if (user.password !== password) {
            return res.status(401).json({ message: 'Unautorized' })
        }

        if (!user) {
            return res.status(404).json({ message: 'Not found!' })
        }

        const token = jwt.sign({email}, 'my-secret', { expiresIn: '1h' })
        res.status(200).json({ token })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authentication failed' })
    }

    const token = authHeader.slice(7);

    try {
        const decoded = jwt.verify(token, 'my-secret');
        req.useremail = decoded.email
        next()
    } catch (error) {
        res.status(401).json({ message: 'Unable to authenticate' })
    }
}

const authorize = (roles = []) => {
    return async (req, res, next) => {
        const user = await getUserByEmail(req.useremail);
        if (!user || !user.roles.includes(roles[0])) {
            return res.status(403).json({ message: 'Unauthorized' })
        }
        req.user = user;
        next();
    }
}

router.get('/users/dashboard', 
    authenticate,
    authorize(['admin']),
    (req, res) => {
        try {
            res.json({ user: req.user })
        } catch (error) {
            res.status(500).json({message: 'Something went wrong'})
        }
})

module.exports = router;
