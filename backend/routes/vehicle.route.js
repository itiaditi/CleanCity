const express = require('express');
const { addVehicle, getVehicles, updateVehicle, deleteVehicle } = require('../controllers/vehicle.controller');
const checkRole = require('../middlewares/access.middleware');
const { authenticateToken } = require('../middleware/auth.middleware');

const vehicleRouter = express.Router();

// Manual validation function
const validateVehicle = (req, res, next) => {
    const { number } = req.body;
    if (!number || typeof number !== 'string') {
        return res.status(400).json({ message: 'Invalid vehicle number' });
    }
    next();
};

// CRUD operations
vehicleRouter.post('/',authenticateToken, checkRole(['superadmin']), validateVehicle, addVehicle);

vehicleRouter.get('/',authenticateToken, checkRole(['superadmin']), getVehicles);

vehicleRouter.patch('/:id',authenticateToken, checkRole(['superadmin']), validateVehicle, updateVehicle);

vehicleRouter.delete('/:id',authenticateToken, checkRole(['superadmin']), deleteVehicle);

module.exports = {
    vehicleRouter
};
