require("dotenv").config();

const express = require('express');

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import routes
const route = require('./routes/house');

app.use('/houses', route);

// Connect to DB 
mongoose.connect(process.env.DB_CONNECTION || 'mongodb://localhost:27020/test',
	{ useNewUrlParser: true, useUnifiedTopology: true }, 
	() => console.log('connect to db')
);

app.listen(8081); 