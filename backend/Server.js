require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
 const auth_user = require('./routes/authRoutes.js'); 
const app = express();
const bp=require('body-parser');
app.use(express.json());
app.use(bp.urlencoded());

 app.use(auth_user); 

app.use((error,req,res,next)=>{
  console.log("errrodaa:--",error.message);
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is Listen in PortNumber ", process.env.PORT)
});

mongoose
  .connect("mongodb://localhost:27017/NoteApp")
  .then(() => {
    console.log("database is Successfully Connected");
  })
  .catch((e) => {
    console.error("Server Is Not Connected", e.message);
  });

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Contact: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Profile_picture: {
    type: String,
    required: true,
  },
});

const notes = new mongoose.Schema({
  note_id: Number,
  user_id: Number,
  note: String,
  date: Date,
});

const notesModel = mongoose.model("notes", notes);
const usermodel = mongoose.model("user", User);

module.exports = {
  usermodel,
  notesModel,
};