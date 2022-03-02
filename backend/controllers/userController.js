const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;

const User = mongoose.model('User');

module.exports.getUsers = (req, res, next) => {
    User.find((err, users) => {
        // console.log(err, users, res);
        if (!err) { res.send(users); }
        else {
            console.log('Error in Retrieving Users : ' + JSON.stringify(err, undefined, 2));
        }
    });
}

module.exports.addUser = (req, res, next) => {
    var user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        profile_image: req.body.profile_image,
    });
    user.save((err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in Saving Users : ' + JSON.stringify(err, undefined, 2));
        } 
    });
}

module.exports.editUser = (req, res, next) => {
    if(!ObjectId.isValid(req.body._id)) {
        return res.status(400).send(`No record with given id : ${req.body._id}`);
    }
        
    var user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        profile_image: req.body.profile_image,
    };
    User.findByIdAndUpdate({_id: req.body._id}, { $set: user }, { new: true },  (err, users) => {
        if (!err) { res.send(users); }
        else {
            console.log('Error in Updating Users : ' + JSON.stringify(err, undefined, 2));
        }
    });
}

module.exports.deleteUser = (req, res, next) => {
    if(!ObjectId.isValid(req.query.id)) {
        return res.status(400).send(`No record with given id : ${req.query.id}`);
    }

    User.findByIdAndRemove( {_id: req.query.id} , (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in Deleting User : ' + JSON.stringify(err, undefined, 2));
        } 
    });
}