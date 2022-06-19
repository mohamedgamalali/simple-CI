const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        require:true,
    }
},{ timestamps: true });

module.exports = mongoose.model('user', userSchema);
