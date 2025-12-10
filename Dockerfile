# Multi-stage Dockerfile for Next.js (app dir) production build
# Uses Node 20 (Debian slim) for compatibility with Next.js build tooling

FROM node:20-bullseye-slim AS builder
WORKDIR /app

# Install build dependencies
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

# Production image
FROM node:20-bullseye-slim AS runner
WORKDIR /app

# Set NODE_ENV for runtime
ENV NODE_ENV=production

# Copy necessary files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# Use the start script defined in package.json
CMD ["npm", "start"]
