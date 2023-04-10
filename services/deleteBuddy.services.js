const {readFileSync, writeFileSync} = require('fs');
const logger = require('../utils/logger');
const deleteBuddyService = (data) => {

    return new Promise((resolve, reject) => {

        const buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", (err) => {
            if(err) {
                logger.error("DeleteBuddy Can't Read from File", err);
                reject("DeleteBuddy :: Can't Read from File");
            }
        }));
    
       
        let empid = data.empid;
        let index = -1;
        for(let i=0; i<buddyList.length; i++) {
            if(empid == parseInt(buddyList[i].empid)) {
                index = i;
                break;
            }
        }
    
        if(index == -1) {
            resolve("Employee Not Exists");
        }
        else {
            logger.info("Deleted a Buddy from the buddyList");
            buddyList.splice(index,1);
        }
    
        writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList), (err) => {
            if(err) {
                reject("DeleteBuddy :: Can't write to File");
            }
        });
    
        resolve("Deleted : ",buddyList[index]);

    }).then(
        function(data) {
            return data;
        },
        function(err) {
            logger.error("Delete Buddy Service ERROR : ",err);
            return err;
        }
    );

};

module.exports = {deleteBuddyService};