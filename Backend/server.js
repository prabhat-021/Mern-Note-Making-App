const express = require("express");
const app = express();
const notes = require("./data/notes.js");
const dotenv= require("dotenv");
const connectDb=require("./config/db.js");
const userRoutes=require("./routes/userRoutes");

dotenv.config();
connectDb();
const PORT = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running ");
})

app.get("/api/notes", (req, res) => {
    res.json(notes);
})

app.use("/api/users",userRoutes);

app.listen(PORT, console.log(`Server is listening at Port ${PORT}`));