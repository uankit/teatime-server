import express, { Application } from "express";
import dotenv from 'dotenv';
const moviesRouter = require('./src/routes/movies');

dotenv.config();
const app: Application = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/movies', moviesRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log("[server]: Server is running");
  });




