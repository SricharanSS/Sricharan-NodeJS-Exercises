require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('./utils/logger');
const cors = require('cors');
const port = process.env.PORT;

// Add CORS
let corsOption = {origin : 'http://localhost:5500'};
app.use(cors(corsOption.origin));


// To Get data from POST also
app.use(express.urlencoded(
    {extended: false}
));

// To Get data as JSON
app.use(express.json());

const buddyRoutes = require('./routes/buddy.routes');
app.use("/buddy",buddyRoutes);

app.use("/",(req,res)=>{
    logger.log( {message : "Default Moduele request made", level : process.env.INFO});
});

app.listen(port, () => {
    const fs = require('fs');
    if( !fs.existsSync("assets/cdw_ace23_buddies.json") ) {
        fs.writeFileSync("assets/cdw_ace23_buddies.json", "[]", (err)=> {
            if(err) {
                logger.log( { message : "Can't create file cdw_ace_23_buddies.json", level : process.env.ERROR});
            }
        });
    }
    logger.log({ message : "Started listening on PORT : "+port, level: process.env.INFO});
});