# Base Image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

# Bundle app source
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
