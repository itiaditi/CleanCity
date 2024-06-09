const express = require('express');
const { addSlot, getSlots, updateSlot, deleteSlot } = require('../controllers/slots.controller');
const checkRole = require('../middleware/access.middleware');


const slotRouter = express.Router();

// Manual validation function
const validateSlot = (req, res, next) => {
    const { startTime, endTime, status, driverId } = req.body;
    if (!startTime || isNaN(new Date(startTime).getTime())) {
        return res.status(400).json({ message: 'Invalid start time' });
    }
    if (!endTime || isNaN(new Date(endTime).getTime())) {
        return res.status(400).json({ message: 'Invalid end time' });
    }
    if (!status || typeof status !== 'string') {
        return res.status(400).json({ message: 'Invalid status' });
    }
    if (driverId !== undefined && (typeof driverId !== 'number' || driverId < 0)) {
        return res.status(400).json({ message: 'Invalid driver ID' });
    }
    next();
};

// CRUD operations
slotRouter.post('/', checkRole(['superadmin']), validateSlot, addSlot);

slotRouter.get('/', checkRole(['superadmin']), getSlots);

slotRouter.put('/:id', checkRole(['superadmin']), validateSlot, updateSlot);

slotRouter.delete('/:id', checkRole(['superadmin']), deleteSlot);

module.exports = {
    slotRouter
};
