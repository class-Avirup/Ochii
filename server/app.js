import express from 'express';
import cors from 'cors';

import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import router from './Router/auth-user.js';

// Initialize dotenv
dotenv.config();

// Create Express app
const app = express();

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Port configuration
const port = 4001;

const corsOptions={
   origin:"http://localhost:5173",
   method:"GET, POST, PUT, DELETE",
   credentials:true
}
app.use(cors(corsOptions))//handling cors policy issue
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use("/api/auth",router);//use router mounting


   app.listen(port);
   