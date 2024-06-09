const { DataTypes } = require('sequelize');
const sequelize = require('../dbConnection/connectToDb');
const Driver = require('./driver.model'); // Assuming Driver model is already defined

const Slot = sequelize.define('Slot', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    driverId: {
        type: DataTypes.INTEGER,
        references: {
            model: Driver,
            key: 'id'
        }
    }
});

Slot.belongsTo(Driver, { foreignKey: 'driverId' });

module.exports = Slot;
