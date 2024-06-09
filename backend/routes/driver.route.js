const { deleteDriver, updateDriver, getDriver, addDriver } = require("../controllers/driver.controller");
const checkRole = require("../middleware/access.middleware");
const express  = require('express');
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

driverRouter.get("/",checkRole(['superadmin']),getDriver);
driverRouter.post("/",checkRole(['superadmin']),addDriver);
driverRouter.patch('/:id',checkRole(['superadmin']),updateDriver);
driverRouter.delete('/:id',checkRole(['superadmin']),deleteDriver);

module.exports={
    driverRouter
}
