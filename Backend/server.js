require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routers/user-routes');
//import bodyParser from 'body-parser';
const cookieParser = require("cookie-parser");
const cors = require('cors');
 //Les navigateurs récents utilisent le CORS dans une API contenante comme XMLHttpRequest ou Fetch pour aider à réduire les risques de requêtes HTTP multi-origines.
// express app
const app = express();
// middleware
app.use(express.json()); 
app.use(cookieParser());
app.use(cors());
app.use('/api' , router);

//connecting with bd
mongoose.connect(process.env.MONGO_URL).then(()=>{
  app.listen(process.env.PORT);
  console.log(`database is connecting to localhost ${process.env.PORT}`)

}).catch((err)=> console.log(err));

