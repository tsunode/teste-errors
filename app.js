const express = require('express');
require('express-async-errors');
const users = require('./controllers');
const AppError = require('./Error');

const app = express();

app.get('/users', users.index);

app.use((error, req, response, next) => {
    if (error instanceof AppError) {
       return response.status(error.statusCode).send(error.message)
    }

    console.error(error);
    
    return response.status(500).send('Internal server Error')
   
    // next(err);
});

app.listen(3333)