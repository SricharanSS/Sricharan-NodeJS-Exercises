const {readFileSync} = require('fs');
const getBuddyService = (data)=> {
    let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
        if(err) {
            console.log("getID :: Can't Read from File");
        }
    }));

    console.log("GetBuddyService : ",data);

    let id = data.empid;
    console.log(id);

    for(const element of buddyList) {
        if(element.empid == id) {
            return(element);
        }
    }

    return("Employee Does Not Exists");

};

module.exports = getBuddyService;