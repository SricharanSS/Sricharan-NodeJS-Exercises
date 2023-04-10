require('dotenv').config();
const {readFileSync, writeFileSync} = require('fs');
const logger = require('../utils/logger');
const deleteBuddyService = (data) => {

    return new Promise((resolve, reject) => {

        const buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", (err) => {
            if(err) {
                logger.log( {message : "DeleteBuddy Can't Read from File", level : process.env.ERROR});
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
            logger.log( { message : "Deleted a Buddy from the buddyList", level : process.env.INFO});
            buddyList.splice(index,1);
        }
    
        writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList), (err) => {
            if(err) {
                logger.log({message : "DeleteBuddy : Can't Write to File", level : process.env.ERROR});
                reject("DeleteBuddy :: Can't write to File");
            }
        });
    
        resolve("Deleted : ",buddyList[index]);

    }).then(
        function(data) {
            return data;
        },
        function(err) {
            logger.log( { message : "Delete Buddy Service ERROR : ", level : process.env.ERROR});
            return err;
        }
    );

};

module.exports = {deleteBuddyService};