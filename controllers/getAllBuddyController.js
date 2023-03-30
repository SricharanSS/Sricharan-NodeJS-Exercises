const getAllBuddyService = require('../services/getAllBuddy.services');

const getAllBuddy = (request, response) => {
    response.send(getAllBuddyService());
};

module.exports = {getAllBuddy};