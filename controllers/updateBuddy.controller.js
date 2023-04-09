const updateBuddyService = require('../services/updateBuddy.services');

const updateBuddy = async (request, response) => {
    response.send(await updateBuddyService(request.body));
};

module.exports = {updateBuddy};