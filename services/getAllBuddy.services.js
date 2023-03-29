const {readFileSync} = require('fs');

const getAllBuddyService = (data) => {

    let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
        if(err) {
            console.log("getID :: Can't Read from File");
        }
    }));

    console.log("GetAllBuddyService : ",data);

    // res.send(buddyList);

};

module.exports = getAllBuddyService;