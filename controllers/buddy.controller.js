const {addBuddyService, deleteBuddyService, getAllBuddyService, getBuddyService, updateBuddyService} = require('../services/buddy.service');

// Add Buddy
const addBuddy = async (request, response) => {
    response.send( await addBuddyService(request.body));
};

// Delete Buddy
const deleteBuddy = async (request, response) => {
    response.send(await deleteBuddyService(request.body));
};

// Get All Buddy
const getAllBuddy = async (request, response) => {
    response.send(await getAllBuddyService());
};

// Get Buddy
const getBuddy = async (request, response) => {
    response.send(await getBuddyService(request.body));
};

// Update Buddy
const updateBuddy = async (request, response) => {
    response.send(await updateBuddyService(request.body));
};

module.exports = {
    addBuddy,
    deleteBuddy,
    getAllBuddy,
    getBuddy,
    updateBuddy
};