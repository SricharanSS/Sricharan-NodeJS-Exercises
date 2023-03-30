const {readFileSync} = require('fs');

const getAllBuddyService = () => {

    let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
        if(err) {
            console.log("getID :: Can't Read from File");
        }
    }));

    console.log("GetAllBuddyService : ",buddyList);

    
    return buddyList;
};

module.exports = getAllBuddyService;