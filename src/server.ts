
/////db password Solika1234
import express, { Express } from 'express';
import mainRouter from '../Routers/mainRouter';
import mongoose from 'mongoose';
const cors = require('cors')
mongoose
  .connect(
    "mongodb+srv://admin:Solika1234@cluster0.nzsvyje.mongodb.net/epicure?retryWrites=true&w=majority",
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err: any) => {
    console.log(err);
  });
  // mongoose
  // .connect(
  //   "mongodb://admin:Solika1234@mongo:27017/?authSource=admin",
  //   // {
  //   //   useNewUrlParser: true,
  //   //   useUnifiedTopology: true,
  //   // }
  // )
  // .then(() => {
  //   console.log("connected with docker");
  // })
  // .catch((err: any) => {
  //   console.log(err,"fuck its doesnt work");
  // });

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors())
app.use('/api' , mainRouter);
app.listen("4000");
app.get("/",(req,res)=>{
 res.send("<h2>we did</h2>")
})
