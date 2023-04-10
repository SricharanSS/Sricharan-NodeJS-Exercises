const getAllBuddyService = require('../services/getAllBuddy.services');

const getAllBuddy = async (request, response) => {
    response.send(await getAllBuddyService.getAllBuddyService());
};

module.exports = {getAllBuddy};