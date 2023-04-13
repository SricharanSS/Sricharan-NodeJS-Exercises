require('dotenv').config();
const express = require('express');
const app = express();
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
    console.log("Deafult Module request made");
});

app.listen(port, () => {
    const fs = require('fs');
    if( !fs.existsSync("assets/cdw_ace23_buddies.json") ) {
        fs.writeFileSync("assets/cdw_ace23_buddies.json", "[]", (err)=> {
            if(err) {
                console.log("Can't create file cdw_ace23_buddies.json");
            }
        });
    }
    console.log("Started listening on PORT : "+port);
});