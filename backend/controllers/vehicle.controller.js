const Vehicle = require('../models/vehicle.model');

const addVehicle = async (req, res) => {
    try {
        const newVehicle = await Vehicle.create(req.body);
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(500).json({ error: 'Error creating vehicle', details: error.message });
    }
};

const getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.findAll();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching vehicles', details: error.message });
    }
};

const updateVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedVehicle = await Vehicle.update(req.body, { where: { id } });
        if (updatedVehicle[0] === 0) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json({ message: 'Vehicle updated' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating vehicle', details: error.message });
    }
};

const deleteVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Vehicle.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json({ message: 'Vehicle deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting vehicle', details: error.message });
    }
};

module.exports = {
    addVehicle,
    getVehicles,
    updateVehicle,
    deleteVehicle
};
