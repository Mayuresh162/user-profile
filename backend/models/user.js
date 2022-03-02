const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    first_name: { 
        type: String,
    },
    last_name: { 
        type: String,
    },
    email: { 
        type: String,
    },
    phone: {
        type: String,
    },
    profile_image: {
        type: String,
    },
});

mongoose.model('User', userSchema);
