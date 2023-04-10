require('dotenv').config();
const {readFileSync} = require('fs');
const logger = require('../utils/logger');
const getBuddyService = (data)=> {

    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
            if(err) {
                logger.log( { message : "GetBuddyService : Can't Read from a File", level : process.env.ERROR});
                reject("getID :: Can't Read from File");
            }
        }));
    
        logger.log({message : "GetBuddyService is requested", level : process.env.INFO});
    
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