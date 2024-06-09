const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../dbConnection/connectToDb');
const Role = require('./role.model');
const Colony = require('./colony.model');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude: {
        type: DataTypes.DECIMAL(10, 8),
        defaultValue: null
    },
    longitude: {
        type: DataTypes.DECIMAL(11, 8),
        defaultValue: null
    },
    roleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'id'
        }
    },
    colonyId: {
        type: DataTypes.INTEGER,
        references: {
            model: Colony,
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    tableName: 'Users',  // Explicitly define the table name
    timestamps: true     // Enable timestamps
});

// Define associations
User.belongsTo(Role, { foreignKey: 'roleId' });
User.belongsTo(Colony, { foreignKey: 'colonyId' });

module.exports = User;
