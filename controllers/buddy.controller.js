const {addBuddyService, deleteBuddyService, getAllBuddiesService, getBuddyService, updateBuddyService} = require('../services/buddy.service');
const {readFileSync} = require('fs');
const logger = require('../utils/logger');

/*  Add Buddy Controller :: START  */
const addBuddy = async (request, response) => {
    const data = {
        empid : request.body.empid,
        realname : request.body.realname,
        nickname : request.body.nickname,
        hobbies : request.body.hobbies
    }

    // Check for valid empid and if empid already exits or not
    if(data.empid >= 1000 && data <= 3000) {
        let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
            if(err) {
                logger.log( { message : "AddBuddyController :: Can't Read File", level : process.env.ERROR});
            }
        }));
        let flag = 0;
        for(let element of buddyList) {
            if(element.empid === data.empid) {
                flag = 1;
                break;
            }
        }
        if(flag) {
            response.send("Employee Already Exits");
        }
    }

    // Check for empty fields
    if(data.realname == "" || data.nickname == "" || data.hobbies == "") {
        response.send("Empty fields");
    }

    // Calling AddBuddy Service and returning response
    response.send( await addBuddyService(request.body));
};
/*  Add Buddy Controller :: END  */


/*  Delete Buddy Controller :: START  */
const deleteBuddy = async (request, response) => {
    const data = request.params.empid;

    // Check for valid empid 
    if( !((data >= 1000) && (data <= 3000)) ) {
        response.send("Empid Not Valid");
    }

    // Reading buddies File - JSON
    let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
        if(err) {
            logger.log( { message : "DeleteBuddyController :: Can't Read File", level : process.env.ERROR});
        }
    }));

    // Checking if the buddy exists or not
    let flag = 0;
    for(let element of buddyList) {
        if(element.empid === data) {
            flag  = 1;
            break;
        }
    }
    if(!flag) {
        response.send("Buddy Not Exists");
    }

    // Calling Service and returning response
    response.send(await deleteBuddyService(request.params.empid));
};
/*  Delete Buddy Controller :: END  */


/*  Get All Buddy Controller :: START  */
const getAllBuddies = async (request, response) => {
    response.send(await getAllBuddiesService());
};
/*  Get All Buddy Controller :: END  */


/*  Get Buddy Controller :: START  */
const getBuddy = async (request, response) => {
    const data = request.params.empid;
    if( !((data >= 1000) && (data <= 3000)) ) {
        response.send("Not Valid empid");
    }

    // Reading buddies File - JSON
    let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
        if(err) {
            logger.log( { message : "GetBuddyController :: Can't Read File", level : process.env.ERROR});
        }
    }));

    // Checking if the buddy exists or not
    let flag = 0;
    for(let element of buddyList) {
        if(element.empid === data) {
            flag  = 1;
            break;
        }
    }
    if(!flag) {
        response.send("Buddy Not Exists");
    }
    

    // Calling the Service and returning the response
    response.send(await getBuddyService(request.params.empid));
};
/*  Get Buddy Controller :: END  */


/*  Update Buddy Controller :: START  */
const updateBuddy = async (request, response) => {
    const data = {
        empid : request.params.empid,
        realname: request.body.realname,
        nickname : request.body.nickname,
        hobbies: request.body.hobbies
    }

    // Checking if the empid is valid
    if( !((data.empid >= 1000) && (data.empid <= 3000)) ) {
        response.send("Not Valid empid");
    }

    // Reading buddies File - JSON
    let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
        if(err) {
            logger.log( { message : "GetBuddyController :: Can't Read File", level : process.env.ERROR});
        }
    }));

    // Checking if the buddy exists or not
    let flag = 0;
    for(let element of buddyList) {
        if(element.empid === data) {
            flag  = 1;
            break;
        }
    }
    if(!flag) {
        response.send("Buddy Not Exists");
    }



    // Calling the Service and returning the response
    response.send(await updateBuddyService(request.params.empid, data));
};
/*  Update Buddy Controller :: END  */


module.exports = {
    addBuddy,
    deleteBuddy,
    getAllBuddies,
    getBuddy,
    updateBuddy
};