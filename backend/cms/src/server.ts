import payload from 'payload'
import dotenv from 'dotenv'
import express from 'express'
import config from './payload.config.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

const start = async () => {
  await payload.init({
    express: app, // <- podajemy Express app!
    config,
  })

  app.listen(PORT, () => {
    payload.logger.info(`Server is listening on port ${PORT}`)
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
  })
}

start()
