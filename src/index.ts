import express, { Response, Request } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log('Connect to database'));

app.use("/api/my/user", myUserRoute);
app.listen(7000, () => {
    console.log("Server started on localhost:7000");
})