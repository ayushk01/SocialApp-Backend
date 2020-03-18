const admin = require("firebase-admin");

// Initialising the admin sdk
admin.initializeApp();

// Setting the db variable poiting to firestore database
const db = admin.firestore();

module.exports = { admin, db };
