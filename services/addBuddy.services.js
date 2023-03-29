const fs = require('fs');
const AddBuddyService = (data)=> {
    console.log("AddBuddyListen Called");
    let buddyList = JSON.parse(fs.readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
        if(err) {
            console.log("AddBuddyListen :: Can't Read File");
        }
    }));

    console.log("AddBuddyService : ",data);

    // console.log(buddyList);
    // console.log(typeof buddyList);
    // buddyList.push();
    

    // fs.writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList), (err)=> {
    //     if(err) {
    //         console.log("AddBuddyListen :: Can't Write to File");
    //     }
    // });

    // res.send(req.body);
};

module.exports = AddBuddyService;