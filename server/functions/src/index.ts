import * as functions from "firebase-functions"
import express from "express"
import cors from "cors"
import items from "./routes/items"

// CONFIG

const app = express()
app.use(cors())
app.use(express.json())

// ROUTES

app.use("/items", items)

// EXPORT API

export const api = functions.https.onRequest(app)
