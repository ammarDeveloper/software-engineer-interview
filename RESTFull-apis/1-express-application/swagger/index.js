const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition : {
        openapi: '3.0.0',
        info: {
            title: 'User api',
            version: '1.0.0',
            description: 'A simple curd operations'
        },
        components: {
            securitySchemes: {
              bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
              }
            }
          },          
        security: [{bearerAuth: []}]
    },
    apis: ['../Routes/userRoutes.js']
}

const swaggerSpec = swaggerJsDoc(options);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A user object
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, age, password]
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: integer
 *               password:
 *                 type: string
 *               roles:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Created user
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Log in a user and return JWT token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: JWT token
 */

/**
 * @swagger
 * /users/dashboard:
 *   get:
 *     summary: Admin-only dashboard
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User dashboard info
 */


module.exports = {
    swaggerSpec, swaggerUi
}