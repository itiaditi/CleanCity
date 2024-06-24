require('dotenv').config();
const express = require("express");
const cors = require("cors");
const sequelize = require('./dbConnection/connectToDb');
const userRoute = require('./routes/user.route');
const colonyRouter = require('./routes/colony.route');
const driverRouter = require('./routes/driver.route'); // Correct import
const slotRouter = require('./routes/slots.route');
const vehicleRouter = require('./routes/vehicle.route');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.use("/user", userRoute);
app.use("/colony", colonyRouter);
app.use("/driver", driverRouter); // Correct route usage
app.use("/slots", slotRouter);
app.use("/vehicle", vehicleRouter);

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to Database");
        console.log(`Server is running at ${PORT}`);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
