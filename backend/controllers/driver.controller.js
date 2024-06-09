const Driver = require('../models/driver.model');

const addDriver = async (req, res) => {
    try {
        const newDriver = await Driver.create(req.body);
        res.status(201).json(newDriver);
    } catch (error) {
        res.status(500).json({ error: 'Error creating driver', details: error.message });
    }
};

const getDrivers = async (req, res) => {
    try {
        const drivers = await Driver.findAll();
        res.status(200).json(drivers);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching drivers', details: error.message });
    }
};

const updateDriver = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedDriver = await Driver.update(req.body, { where: { id } });
        if (updatedDriver[0] === 0) {
            return res.status(404).json({ message: 'Driver not found' });
        }
        res.status(200).json({ message: 'Driver updated' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating driver', details: error.message });
    }
};

const deleteDriver = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Driver.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ message: 'Driver not found' });
        }
        res.status(200).json({ message: 'Driver deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting driver', details: error.message });
    }
};

module.exports = {
    getDrivers,
    addDriver,
    updateDriver,
    deleteDriver
};
