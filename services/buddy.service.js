require('dotenv').config();
const {readFileSync, writeFileSync} = require('fs');

/*  Add Buddy Service  */
const addBuddyService = (data)=> {
    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
            if(err) {
                console.log("AddBuddyService Can't Read File");
                reject("AddBuddyListen :: Can't Read File");
            }
        }));
    
        logger.log( { message : "AddBuddyService is requested", level : process.env.INFO });
        buddyList.push(data);
        writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList), (err)=> {
            if(err) {
                console.log("AddBuddyService Can't write to File");
                reject("AddBuddyListen :: Can't Write to File");
            }
        });
        resolve(buddyList);
    }).then (
        function(data) {
            console.log("Add Buddy Service request is made");
            return data;
        },
        function(err) {
            return err; 
        }
    );
};

/*  Delete Buddy Service  */
const deleteBuddyService = (empid) => {

    return new Promise((resolve, reject) => {

        const buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", (err) => {
            if(err) {
                console.log("DeleteBuddy Can't Read from File");
                reject("DeleteBuddy :: Can't Read from File");
            }
        }));
        let index = -1;
        for(let i=0; i<buddyList.length; i++) {
            if(empid === parseInt(buddyList[i].empid)) {
                index = i;
                break;
            }
        }
        console.log("Deleted a Buddy from the buddyList");
        buddyList.splice(index,1);
    
        writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList), (err) => {
            if(err) {
                console.log("DeleteBuddy : Can't Write to File");
                reject("DeleteBuddy :: Can't write to File");
            }
        });
    
        resolve("Deleted : ",buddyList[index]);

    }).then(
        function(data) {
            return data;
        },
        function(err) {
            console.log("Delete Buddy Service ERROR ", err);
            return err;
        }
    );

};


/*  Get All Buddy Service  */
const getAllBuddiesService = () => {

    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
            if(err) {
                console.log("GetAllBuddyService Can't read from a file");
                reject("getID :: Can't Read from File");
            }
        }));
    
        console.log("GetAllBuddyService is Requested");
    
        resolve(buddyList);
    }).then(
        function(data) {
            return data;
        },
        function(err) {
            return err;
        }
    );
};


/*  Get Buddy Service  */
const getBuddyService = (empid)=> {

    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
            if(err) {
                console.log("GetBuddyService : Can't Read from a File");
                reject("getID :: Can't Read from File");
            }
        }));
    
        console.log("GetBuddyService is requested");
    
        for(const element of buddyList) {
            if(element.empid == empid) {
                resolve(element);
            }
        }
        reject("Employee Does Not Exists");
    }).then(
        function(data) {
            return data;
        },
        function(err) {
            return err;
        }
    );

};


/*  Update Buddy Service  */
const updateBuddyService = (empid, data) => {
    return new Promise((resolve, reject) => {  
        let buddyList = JSON.parse( readFileSync("assets/cdw_ace23_buddies.json", (err) => {
            if(err) {
                console.log("UpdateBuddy Can't Read from File", err);
                reject("updateBuddy :: Can't Read from File");
            }
        }) );
    
        console.log("UpdateBuddyService is requested");
        console.log("UPDATE : ",empid);
    
        for(let element of buddyList) {
            if(empid === element.empid) {
               element.realname = data.realname;
               element.nickname = data.nickname;
               element.hobbies = data.hobbies;
            }
        }
        writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList),(err)=> {
            if(err) {
                console.log("UpdateBuddyService ERROR : ", err);
                reject(err);
            }
        });

        resolve(buddyList);
    }).then(
        function(data) {
            return data;
        },
        function(err) {
            return err;
        }
    );
};


module.exports = {
    addBuddyService,
    deleteBuddyService,
    getAllBuddiesService,
    getBuddyService,
    updateBuddyService
};