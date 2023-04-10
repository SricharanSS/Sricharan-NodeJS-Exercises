const express = require('express');
const app = express();
const logger = require('./utils/logger');
const port = 4000;
// To Get data from POST also
app.use(express.urlencoded(
    {extended: false}
));

// To Get data as JSON
app.use(express.json());

const buddyRoutes = require('./routes/buddy.routes');
app.use("/buddy",buddyRoutes);

app.use("/",(req,res)=>{
    logger.info("Default Moduele request made");
});

app.listen(port, () => {
    const fs = require('fs');
    if( !fs.existsSync("assets/cdw_ace23_buddies.json") ) {
        fs.writeFileSync("assets/cdw_ace23_buddies.json", "[]", (err)=> {
            if(err) {
                logger.error("Can't create file cdw_ace_23_buddies.json");
            }
        });
    }
    logger.info("Started listening on PORT : "+port);
});