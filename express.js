const express = require('express');
const app = express();
const port = 4002;

// To Get data from POST also
app.use(express.urlencoded(
    {extended: false}
));
// To Get data as JSON
app.use(express.json());

const buddyRoutes = require('./routes/buddy.routes');
app.use("/buddy", buddyRoutes);

app.use("/",(req,res)=>{
    console.log("Default Moduele");
});

app.listen(port, () => {
    const fs = require('fs');
    if( !fs.existsSync("assets/cdw_ace23_buddies.json") ) {
        fs.writeFileSync("assets/cdw_ace23_buddies.json", "[]", (err)=> {
            if(err) {
                console.log("Can't Create The File");
            }
        });
    }
    console.log("Started listening on PORT : "+port);
});