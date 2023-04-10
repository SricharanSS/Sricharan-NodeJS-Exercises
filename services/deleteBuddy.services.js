const { rejects } = require('assert');
const {readFileSync, writeFileSync} = require('fs');

const deleteBuddyService = (data) => {

    return new Promise((resolve, reject) => {

        const buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", (err) => {
            if(err) {
                reject("DeleteBuddy :: Can't Read from File");
            }
        }));
    
        console.log("DeleteBuddyService : ",data.empid);
       
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
            console.log("Delete ",buddyList[index].empid);
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
            return err;
        }
    );

};

module.exports = {deleteBuddyService};