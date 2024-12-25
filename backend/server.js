const express = require('express');
const router = require('../backend/routes/auth-routes');
const app = express();
const connectDb = require("./config/db");

app.use(express.json())
app.use('/',router);
connectDb().then(()=>{app.listen(8000, () => {
    console.log
    ("Server start")
});})
