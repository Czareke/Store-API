const express = require('express');
require('dotenv').config(); //dependencies
//mongoose is req
const mongoose = require('mongoose');
const app = require('./app'); //app is commented to server

const DB = process.env.MONGO_URL;
//db is commented to server
mongoose.connect(DB).then(() => {
  console.log('::::::::::::::::::::connected to db::::::::::::::::::::::');
});
//server is setup
const port = process.env.PORT;
//server is setup
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
