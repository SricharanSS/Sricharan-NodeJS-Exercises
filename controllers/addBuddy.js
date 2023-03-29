const fs = require('fs');
const AddBuddyListen = (req,res)=> {
    console.log("AddBuddyListen Called");
    let buddyList = JSON.parse(fs.readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
        if(err) {
            console.log("AddBuddyListen :: Can't Read File");
        }
    }));

    console.log(buddyList);
    console.log(typeof buddyList);
    buddyList.push(req.body);
    

    fs.writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList), (err)=> {
        if(err) {
            console.log("AddBuddyListen :: Can't Write to File");
        }
    });

    res.send(req.body);
};

module.exports = AddBuddyListen;