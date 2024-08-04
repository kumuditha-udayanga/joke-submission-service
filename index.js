import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "./config.js";
import { jokeRoutes } from "./src/routes/jokes.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.json({message: "Submit Jokes service"});
})

app.use("/api/submission/jokes", jokeRoutes);

mongoose.connect(config.ATLAS_URI).then(() => {
    console.log("Database connected");
    app.listen(config.PORT, () => {
        console.log(`Serving running on port ${config.PORT}`);
    });
}).catch(() => {
    console.log("Connection failed");
});
