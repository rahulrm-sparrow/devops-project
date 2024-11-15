
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
// const corsOptions = {
//   origin: ['http://localhost:3000'], // Add allowed origins here
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // Enable cookies sharing if needed
// };

// app.use(cors(corsOptions));

app.use(cors())

app.use('/posts', postRoutes);
app.use('/status', (req, res) => {
  res.send("Hello");
});

// const CONNECTION_URL = 'mongodb://mongodb:27017'; //working for dockercompose
const CONNECTION_URL = 'mongodb://mongodb-service:27017';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);