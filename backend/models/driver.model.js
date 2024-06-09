const { DataTypes } = require('sequelize');
const sequelize = require('../dbConnection/connectToDb');
const Colony = require('./colony.model'); // Assuming Colony model is already defined
const Vehicle = require('./vehicle.model'); // Assuming Vehicle model is already defined

const Driver = sequelize.define('Driver', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    driverName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    colonyId: {
        type: DataTypes.INTEGER,
        references: {
            model: Colony,
            key: 'id'
        }
    },
    vehicleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Vehicle,
            key: 'id'
        }
    }
});

Driver.belongsTo(Colony, { foreignKey: 'colonyId' });
Driver.belongsTo(Vehicle, { foreignKey: 'vehicleId' });

module.exports = Driver;
