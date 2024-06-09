const Role = require("../models/role.model");
const User = require("../models/user.model");

const checkRole = (roles) => {
    return async (req, res, next) => {
        const userId = req.userId; // Assuming the user ID is set in req by an auth middleware
        try {
            const user = await User.findByPk(userId, {
                include: [{
                    model: Role,
                    attributes: ['role']
                }]
            });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const userRole = user.Role.role;
            req.userRole = userRole;

            // Check if the user's role allows access to the requested route
            if (!roles.includes(userRole)) {
                return res.status(403).json({ message: 'Access forbidden: Insufficient permissions' });
            }

            next();
        } catch (error) {
            res.status(500).json({ error: 'Role verification failed', details: error.message });
        }
    };
};

module.exports = checkRole;
