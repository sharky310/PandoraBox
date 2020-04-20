'use strict'

const {createLogger, format, transports} = require('winston');

module.exports = createLogger({
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.timestamp({format:'DD/MM/YY HH:mm:ss'}),
        format.printf(info => `[${info.timestamp}] ${info.level} ${info.message}`)),
    transports: [
        new transports.File({
            maxsize:5120000,
            maxFiles: 5,
            filename: './logs/api.log'
        }),
        new transports.Console({
            level: 'debug',
        })
    ]
})