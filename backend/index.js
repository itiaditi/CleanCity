require('dotenv').config();
const express = require("express");
const cors = require("cors");
const sequelize = require('./dbConnection/connectToDb');
const User = require('./models/user.model');
const Role = require('./models/role.model');
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running!");
  });
  app.get('/roles', async (req, res) => {
    try {
        const roles = await Role.findAll(); // Fetch all roles from the database
        return res.status(200).json({ roles }); // Send the roles as JSON response
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

  app.post('/create', async (req, res) => {
    const { name, email, password, address, latitude, longitude, roleId, colonyId } = req.body;
    try {
        const user = await User.create({
            name,
            email,
            password,
            address,
            latitude,
            longitude,
            roleId,
            colonyId
        });
        return res.status(201).send({ error: false, items: user });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: true, message: error.message });
    }
});

app.listen(PORT,async()=>{
    await sequelize.authenticate();
    console.log("connected to Database")
    console.log(`Server is running at ${PORT}`);
})