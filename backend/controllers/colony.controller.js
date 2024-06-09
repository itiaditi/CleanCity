
const Colony = require('../models/colony.model');
// CRUD operations
const addColony=
    async (req, res) => {
        try {
            const newColony = await Colony.create(req.body);
            res.status(201).json(newColony);
        } catch (error) {
            res.status(500).json({ error: 'Error creating colony', details: error.message });
        }
    }


const getColony=
    async (req, res) => {
        try {
            const colonies = await Colony.findAll();
            res.status(200).json(colonies);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching colonies', details: error.message });
        }
    }


const updateColony=
    async (req, res) => {
        try {
            const { id } = req.params;
            const updatedColony = await Colony.update(req.body, { where: { id } });
            if (updatedColony[0] === 0) {
                return res.status(404).json({ message: 'Colony not found' });
            }
            res.status(200).json({ message: 'Colony updated' });
        } catch (error) {
            res.status(500).json({ error: 'Error updating colony', details: error.message });
        }
    }


const deleteColony=
    async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Colony.destroy({ where: { id } });
            if (!deleted) {
                return res.status(404).json({ message: 'Colony not found' });
            }
            res.status(200).json({ message: 'Colony deleted' });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting colony', details: error.message });
        }
    }


module.exports = {
    addColony,
    getColony,
    updateColony,
    deleteColony
};
