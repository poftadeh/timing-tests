const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const app = express();
const PORT = require('./config/port');
const members = require('./routes/api/members');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

// Connect to Mongo
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log(`Mongo connect at ${db}`))
.catch(err => console.error(err));

app.use(express.static('./public'));
app.use('/api/members', members);

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
