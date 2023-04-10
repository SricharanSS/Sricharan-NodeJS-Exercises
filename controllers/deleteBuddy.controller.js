const deleteBuddyService = require('../services/deleteBuddy.services');

const deleteBuddy = async (request, response) => {
    response.send(await deleteBuddyService.DeleteBuddyService(request.body));
};

module.exports = {deleteBuddy};