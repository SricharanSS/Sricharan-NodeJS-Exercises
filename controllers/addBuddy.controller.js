const addBuddyService = require('../services/addBuddy.services');

const addBuddy = async (request, response) => {
    response.send( await addBuddyService.AddBuddyService(request.body));
};

module.exports = {addBuddy};