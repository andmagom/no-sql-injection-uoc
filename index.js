const express = require('express');
const routes = require('./src/routes');
const bodyParser = require('body-parser');

const port = 80;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static('public'));
app.use('/api', routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))