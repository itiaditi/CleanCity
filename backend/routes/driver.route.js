const { deleteDriver, updateDriver, getDrivers, addDriver } = require("../controllers/driver.controller");
const { checkRole } = require("../middleware/access.middleware");
const express = require('express');
const driverRouter = express.Router();

// Manual validation function
const validateDriver = (req, res, next) => {
    const { name, licenseNumber } = req.body;
    if (!name || typeof name !== 'string') {
        return res.status(400).json({ message: 'Invalid name' });
    }
    if (!licenseNumber || typeof licenseNumber !== 'string') {
        return res.status(400).json({ message: 'Invalid license number' });
    }
    next();
};

// Define routes
driverRouter.get("/", checkRole(['superadmin']), getDrivers);
driverRouter.post("/", checkRole(['superadmin']), validateDriver, addDriver);
driverRouter.patch('/:id', checkRole(['superadmin']), validateDriver, updateDriver);
driverRouter.delete('/:id', checkRole(['superadmin']), deleteDriver);

module.exports = driverRouter; // Export the router directly
