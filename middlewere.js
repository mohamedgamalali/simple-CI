const express = require('express');

const bodyParser = require('body-parser');
const {
    config
} = require('dotenv');

config();

const User = require('./models/user');


module.exports = () => {
    const app = express();

    app.use(bodyParser.json());

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
        next();
    });

    app.get('/', (req, res, next) => {

        res.status(200).json({
            message: 'Welcome to the API'
        });
    })

    app.post('/user', async (req, res, next) => {
        try {
            const {
                userName,
                email
            } = req.body;
            const user = new User({
                userName,
                email
            });
            const result = await user.save();
            res.status(201).json({
                message: 'User Created',
                result: {
                    userName: result.userName,
                    email: result.email
                }
            });
        } catch (error) {
            next(error);
        }
    });

    app.use((error, req, res, next) => {
        const status = error.status || 500;
        const state = error.state || 0;
        const message = error.message || 'somesing went wrong';
        console.log(error);

        res.status(status).json({
            state,
            message
        });
    })
    return app;
}