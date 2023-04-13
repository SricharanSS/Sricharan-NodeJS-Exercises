require('dotenv').config();
const express = require('express');
const logger = require('./config/logger.config');
const cors = require('cors');
const { existsSync, writeFileSync } = require('fs');
const userRoutes = require('./routes/users.routes');

const app = express();
const port = process.env.PORT;

// CORS
let corsOption = {origin : process.env.CORS_ORIGIN};
app(cors(corsOption.origin));

// To Get data from POST also
app.use(express.urlencoded(
    {extended: false}
));

// To Get data as JSON
app.use(express.json());


/* ------------------ Routes ------------------ */ 
app.use("/users", userRoutes);



app.use("/",(req,res)=>{
    console.log("Default Moduele");
});


app.listen(port , () => {
    logger.info("Server Started Listening on PORT : ",port);
    // Creating users.json if it already doesn't exists
    if( !existsSync('./assets/users.json') ) {
        writeFileSync('./assets/users.json', '[]', (err) => {
            if(err) {
                logger.log({ message : "Can't Create users.JSON", level : process.env.ERROR});
            }
        });
    }
});