const {
    config
} = require('dotenv')
const mongoose = require('mongoose');
config();

before(async () => {
    mongoose.connect(process.env[`MONGODB_URI_${process.env.NODE_ENV.toUpperCase()}`], {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(async result => {
            console.log(result);
        }).catch(err => console.log(err));
})