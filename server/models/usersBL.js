const User = require('../models/userModel');
exports.getAllUsers = function() {
    return new Promise((resolve, reject) => {
        User.find({}, function(err, usersData) {
            if (err) {
                reject(err);
            }
            else {
                resolve(usersData);
            }

        })
    })
}
exports.getUser = function(id) {
    return new Promise((resolve, reject) => {
        User.findById(id, function(err, userData) {
            if (err) {
                reject(err);
            }
            else {
                resolve(userData);
            }

        })
    })
}
exports.addUser = function(userNew) {
    return new Promise((resolve, reject) => {
        let newUser = new User ({
            _id:     userNew._id,
            name:    userNew.name,
            email:   userNew.email,
            street:  userNew.street,
            city:    userNew.city,
            zipcode: userNew.zipcode,
            tasks:   userNew.tasks,
            posts:   userNew.posts
        });
        newUser.save(function(err) {
            if(err) {
                reject(err);
            }
            else {
                resolve('Created !');
            }
        })

    })
}
exports.updateUser = function(id, userNew) {
    return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(id, {
            name:    userNew.name,
            email:   userNew.email,
            street:  userNew.street,
            city:    userNew.city,
            zipcode: userNew.zipcode,
            tasks:   userNew.tasks,
            posts:   userNew.posts
            // tasks:   [{ title : userNew.title, completed : userNew.completed}],
            // posts:   [{ title : userNew.title, body : userNew.body}]
        }, function(err) {
            if (err) {
                reject(err);
            }
            else {
                resolve('Updated !');
            }

        })
    })
}
exports.deleteUser = function(id) {
    return new Promise((resolve, reject) => {
        User.findByIdAndDelete(id, function(err) {
            if (err) {
                reject(err);
            }
            else {
                resolve('Deleted !');
            }

        })
    })
}