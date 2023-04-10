require('dotenv').config();
const {readFileSync} = require('fs');
const logger = require('../utils/logger');
const getAllBuddyService = () => {

    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
            if(err) {
                logger.log( { message : "GetAllBuddyService Can't read from a file", level : process.env.ERROR});
                reject("getID :: Can't Read from File");
            }
        }));
    
        logger.log( { message : "GetAllBuddyService is Requested", level : process.env.INFO});
    
        
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