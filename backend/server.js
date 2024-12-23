const express = require('express');
const router = require('../backend/routes/auth-routes');
const app = express();


app.use('',router);
app.listen(8000,()=>{console.log("server started")});