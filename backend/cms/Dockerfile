FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install

# Copy source files
COPY . .

# Build the app
RUN pnpm run build

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

# Start the app
CMD ["node", "dist/server.js"]
