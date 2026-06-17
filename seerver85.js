const express = require("express");
const cron = require("node-cron");

const app = express();
const PORT = 3000;

// Cron Job - Runs every minute
cron.schedule("* * * * *", () => {
    console.log(
        "Cron Job Executed:",
        new Date().toLocaleString()
    );
});

app.get("/", (req, res) => {
    res.send("Cron Job Server Running");
});

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});