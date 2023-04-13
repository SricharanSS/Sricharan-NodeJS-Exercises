const {addBuddyService, deleteBuddyService, getAllBuddiesService, getBuddyService, updateBuddyService} = require('../services/buddy.service');
const {readFileSync} = require('fs');


/*  Add Buddy Controller :: START  */
const addBuddy = async (request, response) => {
    const data = {
        empid : request.body.empid,
        realname : request.body.realname,
        nickname : request.body.nickname,
        hobbies : request.body.hobbies
    }

    // Check for valid empid and if empid already exits or not
    if( !((data.empid >= 1000) && (data.empid <= 3000)) ) {
        response.send({status : 400, data : null, message : "Emp ID Not Valid"});
        console.log("Emp ID Not Valid");
    }
    else if(data.realname == "" || data.nickname == "" || data.hobbies == "") {   // Check for empty fields
        response.send({status : 400, data : null, message : "Do Not Give Empty Fields"});
    }
    else {
        let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
            if(err) {
                response.send({status : 500, data : null, message : "Can't Read File"});
                console.log("AddBuddyController :: Can't Read File");
            }
        }));

        let flag = false;
        for(let element of buddyList) {
            if(element.empid === data.empid) {
                flag = true;
                break;
            }
        }
        if(flag) {
            response.send({status : 100, data : null, message : "Emp Already Exists"});
        }
        else {
            // Calling AddBuddy Service and returning response
            response.send({status : 200, data : await addBuddyService(request.body), message : "Buddy Added"});
        }

    }
};
/*  Add Buddy Controller :: END  */


/*  Delete Buddy Controller :: START  */
const deleteBuddy = async (request, response) => {
    const empid = request.params.empid;

    // Check for valid empid 
    if( !((empid >= 1000) && (empid <= 3000)) ) {
        response.send({status : 400, data : null, message : "Emp ID Not Valid"});
    }

    // Reading buddies File - JSON
    let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
        if(err) {
            console.log("DeleteBuddyController :: Can't Read File");
            response.send({status : 500, data : null, message : "Can't Read File"});
        }
    }));

    // Checking if the buddy exists or not
    let flag = 0;
    for(let element of buddyList) {
        if(element.empid === empid) {
            flag  = 1;
            break;
        }
    }
    if(!flag) {
        response.send({status : 400, data : null, message : "Employee Not Exists"});
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
    const empid = request.params.empid;
    if( !((empid >= 1000) && (empid <= 3000)) ) {
        response.send({status : 400, data : null, message : "Emp ID Not Valid"});
    }

    // Reading buddies File - JSON
    let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
        if(err) {
            console.log("GetBuddyController :: Can't Read File");
        }
    }));

    // Checking if the buddy exists or not
    let flag = 0;
    for(let element of buddyList) {
        if(element.empid === empid) {
            flag  = 1;
            break;
        }
    }

    if(!flag) {
        response.send({status : 100, data : null, message : "Buddy Not Exists"});
    } else {
        // Calling the Service and returning the response
        response.send(await getBuddyService(request.params.empid));
    }
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
        response.send({status : 400, data : null, message : "Emp ID Not Valid"});
    }

    // Reading buddies File - JSON
    let buddyList = JSON.parse(readFileSync("assets/cdw_ace23_buddies.json", 'UTF-8', (err)=> {
        if(err) {
            console.log("GetBuddyController :: Can't Read File");
            response.send({status : 400, data : null, message : "Can't Read File"});
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
        response.send({status : 100, data : null, message : "Buddy Not Exists"});
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