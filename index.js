const express = require('express');
const mongoose = require('mongoose');
const videoRoutes = require('videoroute');

const app = express();

const uri = 'mongodb+srv://asif:mypassword@atlascluster.fzp8upf.mongodb.net/crud?retryWrites=true&w=majority';



mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use(express.json());
app.use('/api', videoroute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

