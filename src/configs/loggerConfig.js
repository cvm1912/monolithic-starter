const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const { getCorrelationId } = require('../utils/request-helper');

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({ format: "MM-DD-YYYY HH:mm:ss" }),
        winston.format.json(),
        winston.format.printf(({ level, message, timestamp, ...data }) => {
            const output = { level, message, timestamp, correlationId: getCorrelationId(), data };
            return JSON.stringify(output);
        })
    ),
    transports: [
        new winston.transports.Console(),
        new DailyRotateFile({
            level: 'info',
            filename: 'logs/application-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
        })
    ]
});

module.exports = logger;