import express from 'express';
import mongoose from 'mongoose';
const app = express();
mongoose.connect("mongodb://localhost:27017/QuizData");
const port = 5000;
import profile from './Schemas/profile.js';
import reg from './postCallbacks/reg.js';

app.use(express.json());

app.post('/reg', (req, res) => {reg(req,res)});
app.post('/login', (req, res)=>{
  let body = req.body;
  profile.findOne({user: body.user}).then((data)=>{
    if (data.length==0){
      res.status(404).send('User does not exist');
      return;
    }
    res.status(200).json(data);
  })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
