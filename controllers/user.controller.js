const { readFileSync } = require('fs');
const logger = require('./config/logger.config');
const userServices = require('../services/user.service');

const userRegisterController = async (request, response) => {

    const usersList = JSON.parse(readFileSync('./assets/users.json', 'utf-8', (err) => {
        if(err) {
            logger.log({ message : "Can't Read users.json", level : process.env.ERROR});
        }
    }));

    let flag = 0;
    for(const element of usersList) {
        if(element.userId === request.body.userId) {
            flag = 1;
            break;
        }
    }

    if(flag) {
        response.status(409).send({ status : 409, data : null, message : "User Already Exists"});
    }
    else {
        response.status(200).send({ status : 200, data : null, message: await userServices.userRegister(request.body)});
    }

};


const userLoginController = async (request, response) => {

    const usersList = JSON.parse(readFileSync('./assets/users.json', 'utf-8', (err) => {
        if(err) {
            logger.log({ message : "Can't Read users.json", level : process.env.ERROR});
        }
    }));

    let flag = 0;
    let index = -1;
    for(let i = 0; i < usersList.length; i++) {
        if(usersList[i].userId === request.body.userId) {
            flag = 1;
            index = i;
            break;
        }
    }

    if(flag) {
        response.status(200).send({ status : 200, data : null, message: await userServices.userLogin(request.body, index)});
    }
    else {
        response.status(400).send({ status : 409, data : null, message : "User Doesn't Exists"});
    }

};

module.exports = {
    userRegisterController,
    userLoginController
};