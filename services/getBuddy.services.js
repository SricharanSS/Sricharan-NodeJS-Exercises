const {readFileSync} = require('fs');
const getBuddyService = (data)=> {
    let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
        if(err) {
            console.log("getID :: Can't Read from File");
        }
    }));

    console.log("GetBuddyService : ",data);

    // let data = req.body;
    // let id = data.id;
    // console.log(id);

    // for(let i=0; i<buddyList.length; i++) {
    //     if(buddyList[i].empid == id) {
    //         res.send(buddyList[i]);
    //     }
    // }

};

module.exports = getBuddyService;