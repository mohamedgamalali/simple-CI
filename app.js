const mongoose = require('mongoose');
const app = require('./middlewere')();
const PORT = process.env.PORT || 3000;




mongoose.connect(process.env[`MONGODB_URI_${process.env.NODE_ENV.toUpperCase()}`], {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(async result => {
        app.listen(PORT);
        console.log(`listen to PORT ${PORT}...`);
    }).catch(err => console.log(err));