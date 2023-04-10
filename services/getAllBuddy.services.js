const {readFileSync} = require('fs');
const logger = require('../utils/logger');
const getAllBuddyService = () => {

    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
            if(err) {
                logger.error("GetAllBuddyService Can't read from a file",err);
                reject("getID :: Can't Read from File");
            }
        }));
    
        logger.info("GetAllBuddyService : ",buddyList);
    
        
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