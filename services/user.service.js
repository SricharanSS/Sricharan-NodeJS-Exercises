const { readFileSync, writeFileSync } = require('fs');
const logger = require('./config/logger.config');
const { resolve } = require('path');


/* ------------------ User Register Service :: START ------------------ */ 
const userRegister = (data) => {

    return new Promise( (resolve, reject) => {

        // Reading the file and stroing it in an obj
        let usersList = JSON.parse(readFileSync('./assets/users.json', 'utf-8', (err) => {
            if(err) {
                logger.log({ message : "Can't Read File users.json", level : process.env.ERROR });
                reject("Can't Read File users.json");
            }
        }));
    
        // Pushing new user into the obj
        usersList.push(data);

        // Writing the obj back into the file
        writeFileSync("./assets/users.json", JSON.stringify(usersList), (err) => {
            if(err) {
                logger.log({ message : "Can't Write to File users.json", level : process.env.ERRORR });
                reject("Can't Write to File users.json");
            }
        });

        resolve("User Registered Successfully");

    }).then(
        function(data) { return data},
        function(err) { return err}
    );

};
/* ------------------ User Register Service :: END ------------------ */ 



/* ------------------ User Login Service :: START ------------------ */ 
const userLogin = (data, index) => {

    return new Promise(() => {

        // Reading the file and stroing it in an obj
        let usersList = JSON.parse(readFileSync('./assets/users.json', 'utf-8', (err) => {
            if(err) {
                logger.log({ message : "Can't Read File users.json", level : process.env.ERROR });
                reject("Can't Read File users.json");
            }
        }));


        // Authenticating the users with the credentials
        if( (usersList[index].userId === data.userId) && (usersList[index].userName === data.userName) && (usersList[index].password === data.password) ) {
            logger.log({ message : "User Authenticated : "+data.userId, level : process.env.INFO });
            resolve("User Authenticated");            
        }
        else {
            logger.log({ message : "User Not Authenticated : "+data.userId, level : process.env.ERROR });
            resolve("User Not Authenticated");
        }

    }).then(
        function(data) { return data},
        function(err) { return err}
    );

};
/* ------------------ User Login Service :: END ------------------ */ 


module.exports = {
    userRegister,
    userLogin
};