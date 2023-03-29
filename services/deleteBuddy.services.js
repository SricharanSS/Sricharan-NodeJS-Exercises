const {readFileSync, writeFileSync} = require('fs');

const deleteBuddyService = (data) => {

    const buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", (err) => {
        if(err) {
            console.log("DeleteBuddy :: Can't Read from File");
        }
    }));

    console.log("DeleteBuddyService : ",data);
   
    // let empid = data.id;
    // let index = -1;
    // for(let i=0; i<buddyList.length; i++) {
    //     if(empid == parseInt(buddyList[i].empid)) {
    //         index = i;
    //         break;
    //     }
    // }

    // if(index == -1) {
    //     res.send("Employee Not Exists");
    // }
    // else {
    //     console.log("Delete ",buddyList[index].empid);
    //     buddyList.splice(index,1);
    // }

    // writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList), (err) => {
    //     if(err) {
    //         console.log("DeleteBuddy :: Can't write to File");
    //     }
    // });

    // res.send("Deleted");
};

module.exports = deleteBuddyService;