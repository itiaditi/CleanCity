const { DataTypes, DATE } = require('sequelize');
const sequelize = require('../dbConnection/connectToDb');

const Role = sequelize.define('Roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
});

module.exports = Role;
