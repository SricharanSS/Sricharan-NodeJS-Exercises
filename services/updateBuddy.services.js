const fs = require('fs');
const logger = require('../utils/logger');
const updateBuddyService = (data) => {
    return new Promise((resolve, reject) => {  
        let buddyList = JSON.parse( fs.readFileSync("assets/cdw_ace23_buddies.json", (err) => {
            if(err) {
                logger.error("UpdateBuddy Can't Read from File : ",err);
                reject("updateBuddy :: Can't Read from File");
            }
        }) );
    
        console.log("UpdateBuddyService : ",data);
    
        let empid = data.empid;
        console.log("UPDATE : ",empid);
    
        for(let element of buddyList) {
            if(empid == element.empid) {
               element.nickname = data.nickname;
               element.hobbies = data.hobbies;
            }
        }
    
        console.log(buddyList);
    
    
        fs.writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList),(err)=> {
            if(err) {
                logger.error("UpdateBuddyService : ",err);
                reject(err);
            }
        });

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

module.exports = {updateBuddyService};