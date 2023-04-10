require('dotenv').config();
const fs = require('fs');
const logger = require('../utils/logger');
const AddBuddyService = (data)=> {
    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(fs.readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
            if(err) {
                logger.log( { message : "AddBuddyService Can't Read File", level : process.env.ERROR});
                reject("AddBuddyListen :: Can't Read File");
            }
        }));
    
        logger.log( { message : "AddBuddyService is requested", level : process.env.INFO });
        buddyList.push(data);
        fs.writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList), (err)=> {
            if(err) {
                logger.log( { message : "AddBuddyService Can't write to File ", level : process.env.ERROR});
                reject("AddBuddyListen :: Can't Write to File");
            }
        });
        resolve(buddyList);
    }).then (
        function(data) {
            logger.log( { message : "Add Buddy Service request is made", level : process.env.INFO});
            return data;
        },
        function(err) {
            return err; 
        }
    );
};

module.exports = {AddBuddyService};