import * as winston from 'winston'

export default winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'logger-service' },
  transports: [
    new winston.transports.Console({ format: winston.format.simple(), level: 'verbose' })
  ]
})
