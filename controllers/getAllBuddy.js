const {readFileSync} = require('fs');

const getAllBuddy = (req,res) => {

    let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
        if(err) {
            console.log("getID :: Can't Read from File");
        }
    }));

    res.send(buddyList);

};

module.exports = getAllBuddy;