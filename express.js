require('dotenv').config();
const express = require('express');
const logger = require('./config/logger.config');
const app = express();
const port = process.env.PORT;

// To Get data from POST also
app.use(express.urlencoded(
    {extended: false}
));

// To Get data as JSON
app.use(express.json());


app.listen(port , () => {
    logger.info("Server Started Listening on PORT : ",port);
});