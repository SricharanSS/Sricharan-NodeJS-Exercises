const fs = require('fs');

const updateBuddyService = (data) => {
    const buddyList = JSON.parse( fs.readFileSync("assets/cdw_ace23_buddies.json", (err) => {
        if(err) {
            console.log("updateBuddy :: Can't Read from File");
        }
    }) );

    console.log("UpdateBuddyService : ",data);

    // let empid = req.body.empid;
    
    // for(let i=0; i<buddyList.length; i++) {
    //     if(empid == buddyList[i].empid) {
    //         buddyList[i].realname = req.body.realname;
    //     }
    // }

    // res.send(buddyList);


    // fs.writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList),(err)=> {
    //     if(err) {
    //         console.log(err);
    //     }
    // });
};

module.exports = updateBuddyService;