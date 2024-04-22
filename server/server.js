import express from 'express';
import 'colors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.route.js';

import connectToMongoDB from './db/connectToMongoDB.js';
import {app, server} from './socket/socket.js';

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve ();

dotenv.config ();

//middle
app.use (express.json ());
app.use (cookieParser ());

//database config
connectToMongoDB ();

//routes
app.use ('/api/auth', authRoutes);
app.use ('/api/message', messageRoutes);
app.use ('/api/users', userRoutes);

app.use (express.static (path.join (__dirname, '/client/dist')));

app.get ('*', (req, res) => {
  res.sendFile (path.join (__dirname, 'client', 'dist', 'index.html'));
});

//port
server.listen (PORT, () =>
  console.log (`server running on port ${PORT}`.bgGreen.black)
);
