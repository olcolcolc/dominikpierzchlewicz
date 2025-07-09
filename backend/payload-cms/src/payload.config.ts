import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media as MediaCollection } from './collections/Media'
import SliderImage from './collections/SliderImage'
import { s3Storage } from '@payloadcms/storage-s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Ensure all necessary S3/B2 environment variables are defined.
// Payload CMS requires these for the s3Storage plugin to function correctly.
// If any are missing, the application cannot start.
if (!process.env.S3_BUCKET) {
  throw new Error('S3_BUCKET environment variable is not defined.')
}
if (!process.env.S3_ENDPOINT) {
  throw new Error('S3_ENDPOINT environment variable is not defined.')
}
if (!process.env.S3_ACCESS_KEY_ID) {
  throw new Error('S3_ACCESS_KEY_ID environment variable is not defined.')
}
if (!process.env.S3_SECRET_ACCESS_KEY) {
  throw new Error('S3_SECRET_ACCESS_KEY environment variable is not defined.')
}

const corsOrigins = process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : []

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, SliderImage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      bucket: process.env.S3_BUCKET,
      config: {
        endpoint: process.env.S3_ENDPOINT,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
      },
      collections: {
        [MediaCollection.slug]: { type: 'media' },
      },
    }),
  ],
  cors: corsOrigins,
})
