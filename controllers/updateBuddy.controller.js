const updateBuddyService = require('../services/updateBuddy.services');

const updateBuddy = (request, response) => {
    response.send(updateBuddyService(request.body));
};

module.exports = {updateBuddy};