const fs = require('fs');
const logger = require('../utils/logger');
const AddBuddyService = (data)=> {
    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(fs.readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
            if(err) {
                logger.error("AddBuddyService Can't Read File : ",err);
                reject("AddBuddyListen :: Can't Read File");
            }
        }));
    
        logger.info("AddBuddyService is requested");
        buddyList.push(data);
        fs.writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList), (err)=> {
            if(err) {
                logger.error("AddBuddyService Can't write to File ",err);
                reject("AddBuddyListen :: Can't Write to File");
            }
        });
        resolve(buddyList);
    }).then (
        function(data) {
            logger.info("Add Buddy Service request is made");
            return data;
        },
        function(err) {
            return err; 
        }
    );
};

module.exports = {AddBuddyService};