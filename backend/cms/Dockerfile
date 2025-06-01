# -------------- Stage 1: Builder --------------
FROM node:18-alpine AS builder

WORKDIR /app

# Enable and prepare pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only dependency files first
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy rest of the application
COPY . .

# Build TypeScript and Payload Admin
RUN pnpm run build

# -------------- Stage 2: Production --------------
FROM node:18-alpine AS runner

WORKDIR /app

# Enable and prepare pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Only copy production files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/build ./build
COPY --from=builder /app/payload-types.ts ./payload-types.ts

ENV NODE_ENV=production
EXPOSE 10000

CMD ["node", "dist/server.js"]
