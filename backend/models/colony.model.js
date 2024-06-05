const { DataTypes } = require('sequelize');
const sequelize = require('../dbConnection/connectToDb');

const Colony = sequelize.define('Colony', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    colonyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalGarbage: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: null
    }
});

module.exports = Colony;
