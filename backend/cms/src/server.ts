import express from 'express'
import payload from 'payload'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import config from './payload.config.js'

dotenv.config()

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// @ts-ignore
app.use(payload.expressMiddleware())


// Serwuj pliki statyczne z admina
app.use('/admin', express.static(path.join(__dirname, './build')))

const start = async () => {
  await payload.init({
    config,
    express: app,
  } as any)

  app.get('/healthz', (req, res) => {
    res.status(200).send('OK')
  })

  app.get('/', (req, res) => {
    res.redirect('/admin')
  })

  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

  app.listen(port, () => {
    payload.logger.info(`Server is listening on port ${port}`)
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
  })
}

start()
