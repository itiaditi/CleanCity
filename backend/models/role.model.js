
const sequelize = require('../dbConnection/connectToDb');

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Roles', // Explicitly specify the table name
    timestamps: false   // Disable automatic timestamps
});

module.exports = Role;
