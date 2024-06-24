const express = require('express');
const { addUser, getUsers, updateUser, deleteUser, login, loginUser } = require('../controllers/user.controller');
const {checkRole} = require('../middleware/access.middleware');

const { authenticateToken } = require('../middleware/auth.middleware');
const userRouter = express.Router();

// Validation function for user creation
const validateUser = (req, res, next) => {
    const { name, email, password, address } = req.body;
    if (!name || typeof name !== 'string') {
        return res.status(400).json({ message: 'Invalid name' });
    }
    if (!email || typeof email !== 'string') {
        return res.status(400).json({ message: 'Invalid email' });
    }
    if (!password || typeof password !== 'string') {
        return res.status(400).json({ message: 'Invalid password' });
    }
    if (!address || typeof address !== 'string') {
        return res.status(400).json({ message: 'Invalid address' });
    }
    next();
};

// CRUD operations
userRouter.post('/', addUser);
userRouter.get('/',authenticateToken, checkRole(['admin',"superadmin"]), getUsers);
userRouter.put('/:id', checkRole(['admin']), updateUser);
userRouter.delete('/:id', checkRole(['admin']), deleteUser);
userRouter.post("/login",loginUser);

module.exports =  userRouter

