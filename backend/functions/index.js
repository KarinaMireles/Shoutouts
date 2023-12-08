/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

admin.initializeApp();
const app = express();
app.use(cors({ origin: true }));

const mongoClient = new MongoClient("YOUR_MONGODB_CONNECTION_STRING");

app.get("/shoutouts", async (req, res) => {
  // Code to fetch shoutouts from MongoDB
});

app.post("/shoutouts", async (req, res) => {
  // Code to add a new shoutout to MongoDB
});

exports.api = functions.https.onRequest(app);
