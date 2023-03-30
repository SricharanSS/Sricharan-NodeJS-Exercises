const fs = require('fs');

const updateBuddyService = (data) => {
    const buddyList = JSON.parse( fs.readFileSync("assets/cdw_ace23_buddies.json", (err) => {
        if(err) {
            console.log("updateBuddy :: Can't Read from File");
        }
    }) );

    console.log("UpdateBuddyService : ",data);

    let empid = data.empid;
    console.log("UPDATE : ",empid);
    
    for(const element of buddyList) {
        if(empid == element.empid) {
            element = data;
        }
    }

    console.log(buddyList);


    fs.writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList),(err)=> {
        if(err) {
            console.log(err);
        }
    });

    return(buddyList);
};

module.exports = updateBuddyService;