require('./db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const indexRouter = require('./routes/indexRouter');

var app = express();
app.use(bodyParser.json());
app.use(cors()); // to communicate between angular port and node port, we have to enable cors.
app.use('/api', indexRouter);


app.listen(3000, () => console.log('Server started at port : 3000'));
