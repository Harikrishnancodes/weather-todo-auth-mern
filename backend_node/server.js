const express = require("express");
const app = express();
const cors = require('cors')
const db = require('./config/db');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); 
    res.header('Access-Control-Allow-Credentials', 'true'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); 
  
    if (req.method === 'OPTIONS') {
      
      res.sendStatus(200);
    } else {
      next();
    }
  });


app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT || 3000;
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
};


const userrouter = require('./router/userRouter');

db(()=>{
    try {
        console.log("DataBase Successfully Connected");        
    } catch (error) {
        console.log("Database Not Connected : ", error);    
    }});
    
    app.use('/',userrouter);
  
    
    const PORT = 3000;
    app.listen(PORT,()=> console.log("server Started @ 3000 "));
