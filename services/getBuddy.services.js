const {readFileSync} = require('fs');
const GetBuddyService = (data)=> {

    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
            if(err) {
                reject("getID :: Can't Read from File");
            }
        }));
    
        console.log("GetBuddyService : ",data);
    
        let id = data.empid;
        console.log(id);
    
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

module.exports = {GetBuddyService};