//Backed Server
//This file is the entry point of the server. It is responsible for starting the server and connecting to the database. It also defines the routes for the application. 
import express from 'express';
import dotenv from 'dotenv';
import getAuthUser from './routes/auth.routes.js';
import {ConnectDb} from './db/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());



app.use('/api/auth', getAuthUser);

app.listen(port, () => { 
    console.log(`http://localhost:${port}`);
    ConnectDb();
});