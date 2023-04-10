const fs = require('fs');
const AddBuddyService = (data)=> {
    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(fs.readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
            if(err) {
                reject("AddBuddyListen :: Can't Read File");
            }
        }));
    
        console.log("AddBuddyService : ",data);
        buddyList.push(data);
        console.log(buddyList);
        fs.writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList), (err)=> {
            if(err) {
                reject("AddBuddyListen :: Can't Write to File");
            }
        });
        resolve(buddyList);
    }).then (
        function(data) {
            return data;
        },
        function(err) {
            return err; 
        }
    );
};

module.exports = {AddBuddyService};