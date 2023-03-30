const getBuddyService = require('../services/getBuddy.services');

const getBuddy = async (request, response) => {
    response.send(await getBuddyService(request.body));
};

module.exports = {getBuddy};