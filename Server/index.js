const express = require('express');
const app = express();
const db = require('./config/connection');
const routes = require('./routes');
const PORT = process.env.PORT || 3001
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(cors());


app.use('/', routes)


db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}!`);
    });
});