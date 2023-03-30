const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const updateBuddyService = (data) => {
    return new Promise((resolve, reject) => {  
        let buddyList = JSON.parse( fs.readFileSync("assets/cdw_ace23_buddies.json", (err) => {
            if(err) {
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