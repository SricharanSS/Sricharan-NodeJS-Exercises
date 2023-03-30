const addBuddyService = require('../services/addBuddy.services');

const addBuddy = (request, response) => {
    response.send(addBuddyService(request.body));
};

module.exports = {addBuddy};