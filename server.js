import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import orderRoute from './routes/orderRoute.js';

const app = express();
const port = process.env.PORT || 8080; // !

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json()); 

// routes
app.use('/api', orderRoute);

mongoose
    .connect(
        "mongodb+srv://desh:Yb0Mumg@cluster0.gxgfuia.mongodb.net/Daniloff_database?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB OK"))
    .catch((err) => console.log("BD error", err));


app.listen(port, () => {
    console.log(`Is listening on port: ${port}`);
});