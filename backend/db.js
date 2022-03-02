const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userprofile', { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(!err) {
        console.log('MongoDB connection succeeded');
    } else {
        console.log('Error in DB Connection : ' + JSON.stringify(err, undefined, 2));
    }
});

require('./models/user');

module.exports = mongoose;
