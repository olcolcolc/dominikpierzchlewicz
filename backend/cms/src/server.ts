import express from 'express'
import payload from 'payload'
import dotenv from 'dotenv'
import config from './payload.config.js'

dotenv.config()

const app = express()

const start = async () => {
  await payload.init({
    config,
    express: app,
  } as any)

  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

  app.listen(port, () => {
    payload.logger.info(`Server is listening on port ${port}`)
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
  })
}

start()
