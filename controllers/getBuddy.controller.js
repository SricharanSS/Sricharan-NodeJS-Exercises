const getBuddyService = require('../services/getBuddy.services');

const getBuddy = (request, response) => {
    response.send(getBuddyService(request.body));
};

module.exports = {getBuddy};