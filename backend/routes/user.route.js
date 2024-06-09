const express = require('express');
const { addUser, getUsers, updateUser, deleteUser } = require('../controllers/user.controller');
const checkRole = require('../middlewares/access.middleware');

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
userRouter.post('/', checkRole(['admin']), validateUser, addUser);
userRouter.get('/', checkRole(['admin', 'superadmin']), getUsers);
userRouter.put('/:id', checkRole(['admin']), validateUser, updateUser);
userRouter.delete('/:id', checkRole(['admin']), deleteUser);

module.exports = {
    userRouter
};
