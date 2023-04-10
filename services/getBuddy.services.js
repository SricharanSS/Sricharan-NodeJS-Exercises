const {readFileSync} = require('fs');
const logger = require('../utils/logger');
const getBuddyService = (data)=> {

    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
            if(err) {
                logger.error("GetBuddyService : Can't Read from a File",err);
                reject("getID :: Can't Read from File");
            }
        }));
    
        logger.info("GetBuddyService : ",data);
    
        let id = data.empid;
    
        for(const element of buddyList) {
            if(element.empid == id) {
                resolve(element);
            }
        }
    
        resolve("Employee Does Not Exists");
    }).then(
        function(data) {
            return data;
        },
        function(err) {
            return err;
        }
    );

};

module.exports = {getBuddyService};