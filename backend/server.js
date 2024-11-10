import express from 'express';
import mongoose from 'mongoose';
const app = express();
mongoose.connect("mongodb://localhost:27017/QuizData");
const port = 5000;
import profile from './Schemas/profile.js';
import reg from './postCallbacks/reg.js';
import login from './postCallbacks/login.js';

app.use(express.json());

app.post('/reg', (req, res) => {reg(req,res)});
app.post('/login', (req, res)=>{login(req.body, res)});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
