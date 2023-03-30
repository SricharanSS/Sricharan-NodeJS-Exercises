const {readFileSync} = require('fs');

const getAllBuddyService = () => {

    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
            if(err) {
                reject("getID :: Can't Read from File");
            }
        }));
    
        console.log("GetAllBuddyService : ",buddyList);
    
        
        resolve(buddyList);
    }).then(
        function(data) {
            return data;
        },
        function(err) {
            return err;
        }
    );
};

module.exports = {getAllBuddyService};