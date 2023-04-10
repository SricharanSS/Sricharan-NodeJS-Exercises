require('dotenv').config();
const fs = require('fs');
const logger = require('../utils/logger');
const updateBuddyService = (data) => {
    return new Promise((resolve, reject) => {  
        let buddyList = JSON.parse( fs.readFileSync("assets/cdw_ace23_buddies.json", (err) => {
            if(err) {
                logger.log( {message : "UpdateBuddy Can't Read from File : ", level : process.env.ERROR} );
                reject("updateBuddy :: Can't Read from File");
            }
        }) );
    
        logger.log( {message : "UpdateBuddyService is requested", level: process.env.INFO} );
    
        let empid = data.empid;
        console.log("UPDATE : ",empid);
    
        for(let element of buddyList) {
            if(empid == element.empid) {
               element.nickname = data.nickname;
               element.hobbies = data.hobbies;
            }
        }
    
    
        fs.writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList),(err)=> {
            if(err) {
                logger.log( {message : "UpdateBuddyService : ", level : process.env.ERROR});
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