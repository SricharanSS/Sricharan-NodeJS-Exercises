const getAllBuddyService = require('../services/getAllBuddy.services');

const getAllBuddy = async (request, response) => {
    response.send(await getAllBuddyService());
};

module.exports = {getAllBuddy};