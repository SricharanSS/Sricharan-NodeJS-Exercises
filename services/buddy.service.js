require('dotenv').config();
const {readFileSync, writeFileSync} = require('fs');
const logger = require('../utils/logger');

/*  Add Buddy Service  */
const addBuddyService = (data)=> {
    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
            if(err) {
                logger.log( { message : "AddBuddyService Can't Read File", level : process.env.ERROR});
                reject("AddBuddyListen :: Can't Read File");
            }
        }));
    
        logger.log( { message : "AddBuddyService is requested", level : process.env.INFO });
        buddyList.push(data);
        writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList), (err)=> {
            if(err) {
                logger.log( { message : "AddBuddyService Can't write to File ", level : process.env.ERROR});
                reject("AddBuddyListen :: Can't Write to File");
            }
        });
        resolve(buddyList);
    }).then (
        function(data) {
            logger.log( { message : "Add Buddy Service request is made", level : process.env.INFO});
            return data;
        },
        function(err) {
            return err; 
        }
    );
};


/*  Delete Buddy Service  */
const deleteBuddyService = (data) => {

    return new Promise((resolve, reject) => {

        const buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", (err) => {
            if(err) {
                logger.log( {message : "DeleteBuddy Can't Read from File", level : process.env.ERROR});
                reject("DeleteBuddy :: Can't Read from File");
            }
        }));
        let empid = data.empid;
        let index = -1;
        for(let i=0; i<buddyList.length; i++) {
            if(empid == parseInt(buddyList[i].empid)) {
                index = i;
                break;
            }
        }
    
        if(index == -1) {
            resolve("Employee Not Exists");
        }
        else {
            logger.log( { message : "Deleted a Buddy from the buddyList", level : process.env.INFO});
            buddyList.splice(index,1);
        }
    
        writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList), (err) => {
            if(err) {
                logger.log({message : "DeleteBuddy : Can't Write to File", level : process.env.ERROR});
                reject("DeleteBuddy :: Can't write to File");
            }
        });
    
        resolve("Deleted : ",buddyList[index]);

    }).then(
        function(data) {
            return data;
        },
        function(err) {
            logger.log( { message : "Delete Buddy Service ERROR : ", level : process.env.ERROR});
            return err;
        }
    );

};


/*  Get All Buddy Service  */
const getAllBuddyService = () => {

    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
            if(err) {
                logger.log( { message : "GetAllBuddyService Can't read from a file", level : process.env.ERROR});
                reject("getID :: Can't Read from File");
            }
        }));
    
        logger.log( { message : "GetAllBuddyService is Requested", level : process.env.INFO});
    
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
const getBuddyService = (data)=> {

    return new Promise((resolve, reject) => {
        let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json",(err)=> {
            if(err) {
                logger.log( { message : "GetBuddyService : Can't Read from a File", level : process.env.ERROR});
                reject("getID :: Can't Read from File");
            }
        }));
    
        logger.log({message : "GetBuddyService is requested", level : process.env.INFO});
    
        let id = data.empid;
    
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


/*  Update Buddy Service  */
const updateBuddyService = (data) => {
    return new Promise((resolve, reject) => {  
        let buddyList = JSON.parse( readFileSync("assets/cdw_ace23_buddies.json", (err) => {
            if(err) {
                logger.log( {message : "UpdateBuddy Can't Read from File : ", level : process.env.ERROR} );
                reject("updateBuddy :: Can't Read from File");
            }
        }) );
    
        logger.log( {message : "UpdateBuddyService is requested", level: process.env.INFO} );
    
        let empid = data.empid;
        console.log("UPDATE : ",empid);
    
        for(let element of buddyList) {
            if(empid == element.empid) {
               element.nickname = data.nickname;
               element.hobbies = data.hobbies;
            }
        }
        writeFileSync("assets/cdw_ace23_buddies.json", JSON.stringify(buddyList),(err)=> {
            if(err) {
                logger.log( {message : "UpdateBuddyService : ", level : process.env.ERROR});
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
    getAllBuddyService,
    getBuddyService,
    updateBuddyService
};