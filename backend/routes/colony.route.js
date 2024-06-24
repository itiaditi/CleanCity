const { updateColony, deleteColony, getColony, addColony } = require("../controllers/colony.controller");

const express = require("express");
const { authenticateToken } = require("../middleware/auth.middleware");
const {checkRole} = require("../middleware/access.middleware");
const colonyRouter = express.Router();
const validateColony = (req, res, next) => {
    const { colonyName, totalGarbage } = req.body;
    if (!colonyName || typeof colonyName !== 'string') {
        return res.status(400).json({ message: 'Invalid colony name' });
    }
    if (totalGarbage !== undefined && (typeof totalGarbage !== 'number' || totalGarbage < 0)) {
        return res.status(400).json({ message: 'Invalid total garbage value' });
    }
    next();
};
colonyRouter.post("/",authenticateToken, checkRole(['superadmin']), addColony);
colonyRouter.get("/",authenticateToken,  checkRole(['superadmin']), getColony);
colonyRouter.patch('/:id',authenticateToken,   checkRole(['superadmin']), updateColony);
colonyRouter.delete("/:id",authenticateToken,  checkRole(['superadmin']), deleteColony);

module.exports = 
        colonyRouter
