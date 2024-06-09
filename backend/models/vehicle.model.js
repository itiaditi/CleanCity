const { DataTypes } = require('sequelize');
const sequelize = require('../dbConnection/connectToDb');

const Vehicle = sequelize.define('Vehicle', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Vehicle;
