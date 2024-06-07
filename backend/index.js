require('dotenv').config();
const express = require("express");
const cors = require("cors");
const sequelize = require('./dbConnection/connectToDb');
const { userRoute } = require('./routes/user.route');
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running!");
  });

app.use("/user",userRoute);

app.listen(PORT,async()=>{
    await sequelize.authenticate();
    console.log("connected to Database")
    console.log(`Server is running at ${PORT}`);
})