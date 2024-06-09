const Slot = require('../models/slots.model');

const addSlot = async (req, res) => {
    try {
        const newSlot = await Slot.create(req.body);
        res.status(201).json(newSlot);
    } catch (error) {
        res.status(500).json({ error: 'Error creating slot', details: error.message });
    }
};

const getSlots = async (req, res) => {
    try {
        const slots = await Slot.findAll();
        res.status(200).json(slots);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching slots', details: error.message });
    }
};

const updateSlot = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSlot = await Slot.update(req.body, { where: { id } });
        if (updatedSlot[0] === 0) {
            return res.status(404).json({ message: 'Slot not found' });
        }
        res.status(200).json({ message: 'Slot updated' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating slot', details: error.message });
    }
};

const deleteSlot = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Slot.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ message: 'Slot not found' });
        }
        res.status(200).json({ message: 'Slot deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting slot', details: error.message });
    }
};

module.exports = {
    addSlot,
    getSlots,
    updateSlot,
    deleteSlot
};
