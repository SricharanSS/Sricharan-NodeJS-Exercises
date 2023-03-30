const deleteBuddyService = require('../services/deleteBuddy.services');

const deleteBuddy = (request, response) => {
    response.send(deleteBuddyService(request.body));
};

module.exports = {deleteBuddy};