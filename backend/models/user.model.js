const { DataTypes } = require('sequelize');
const sequelize = require('../dbConnection/connectToDb');
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
    role: {
        type: DataTypes.ENUM('admin', 'user', 'superadmin',"driver"),
        allowNull: false,
        defaultValue: 'user'
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
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'Users',  // Explicitly define the table name
    timestamps: true     // Enable timestamps
});

// Define associations
User.belongsTo(Colony, { foreignKey: 'colonyId' });

module.exports = User;
