const User = require('../models/user.model');
const Role = require('../models/role.model');

// Function to add a user with role 'user'
const addUser = async (req, res) => {
    try {
        const { name, email, password, address, latitude, longitude, colonyId } = req.body;
        const role = await Role.findOne({ where: { role: 'user' } });
        
        if (!role) {
            return res.status(400).json({ message: 'User role not found' });
        }

        const newUser = await User.create({
            name,
            email,
            password,
            address,
            latitude,
            longitude,
            roleId: role.id,
            colonyId
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Error creating user', details: error.message });
    }
};

// Function to get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({ include: [Role, Colony] });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users', details: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.update(req.body, { where: { id } });
        if (updatedUser[0] === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating user', details: error.message });
    }
};

// Function to delete a user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user', details: error.message });
    }
};

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
};
