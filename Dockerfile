
# Base image for building
FROM node:18-alpine AS builder
WORKDIR /app

# Copy and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy all files and build the app
COPY . .
RUN npm run build

# Production image
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only what's needed for production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]