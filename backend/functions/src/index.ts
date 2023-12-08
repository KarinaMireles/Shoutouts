import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import shoutouts from "./routes/shoutouts";
import { verifyToken } from "./middleware/auth";

// CONFIG

const app = express();
app.use(cors());
app.use(express.json());

// PUBLIC ROUTES

// SECURED ROUTES

app.use("/shoutouts", verifyToken, shoutouts);

// EXPORT API

export const api = functions.https.onRequest(app);
