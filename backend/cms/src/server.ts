import payload from 'payload'
import dotenv from 'dotenv'
import config from './payload.config.js'

dotenv.config()

const start = async () => {
  await payload.init({
    config,
  })

  payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
}

start()
