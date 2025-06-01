import payload from 'payload'
import dotenv from 'dotenv'

dotenv.config()

const start = async () => {
  await payload.init({
    config: require('./src/payload.config').default,
  })

  payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
}

start()
