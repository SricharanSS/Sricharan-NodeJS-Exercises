const {createLogger, format, transports} = require('winston');

module.exports = createLogger({

    transports : 
        new transports.File({
            filename : 'logs/server.log',
            format : format.combine(
                format.align(),
                format.timestamp({format : 'DD-MMM-YYYY HH:mm:ss'}),
                format.printf(info => `$(info.level): ${[info.timestamp]}: ${info.message}`),
            ),
        })
});