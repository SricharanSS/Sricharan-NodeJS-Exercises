const addBuddyService = require('../services/addBuddy.services');
const getBuddyService = require('../services/getBuddy.services');
const getAllBuddyService = require('../services/getAllBuddy.services');
const updateBuddyService = require('../services/updateBuddy.services');
const deleteBuddyService = require('../services/deleteBuddy.services');



const addBuddy = (request, responce) => {
    responce.send(addBuddyService(request.body));
};

const getBuddy = (request, responce) => {
    responce.send(getBuddyService(request.body));
};

const getAllBuddy = (request, responce) => {
    responce.send(getAllBuddyService(request.body));
};

const updateBuddy = (request, responce) => {
    responce.send(updateBuddyService(request.body));
};

const deleteBuddy = (request, responce) => {
    responce.send(deleteBuddyService(request.body));
};

module.exports = {
    addBuddy,
    getBuddy,
    getAllBuddy,
    updateBuddy,
    deleteBuddy
};