const mongoose = require ('mongoose');
let   userSchema = mongoose.Schema;
let   UserSchema = new userSchema({
        id:         String,
        name:       String,
        email:      String,
        street:     String,
        city:       String,
        zipcode:    Number,
        tasks:      [{title: String, completed: Boolean}],
        posts:      [{title: String, body: String}]
});
module.exports = mongoose.model('users', UserSchema); 
