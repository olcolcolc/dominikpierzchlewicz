FROM node:18-alpine

WORKDIR /app


COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install

COPY . .

# Build the app
RUN pnpm run build

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Start the app
CMD ["node", "dist/server.js"]
