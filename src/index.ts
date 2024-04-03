import express, { Response, Request } from "express";
import cors from "cors";
import "dotenv/config";
import myUserRoute from "./routes/MyUserRoute";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/user', myUserRoute);

app.listen(7000, () => {
    console.log("Server started on localhost:7000");
})