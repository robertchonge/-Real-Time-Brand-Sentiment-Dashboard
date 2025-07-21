const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const routes = require('./routes');
const { monitorTwitterStream } = require('./twitterStream');
const { fetchNewsArticles } = require('./newsFetcher');
const { runAlertEngine } = require('./alertEngine');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

mongoose.connect(process.env.MONGODB_URI);

app.use(express.json());
app.use('/api', routes);

io.on('connection', (socket) => {
  console.log('Client connected');
});

monitorTwitterStream(io);
setInterval(() => fetchNewsArticles(io), 60000);
setInterval(() => runAlertEngine(io), 60000);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
