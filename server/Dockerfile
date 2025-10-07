# --- Build stage ---
FROM node:24-alpine AS builder
ENV NODE_ENV=production
WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm ci

COPY src ./src
RUN npm run build

# --- Runtime stage ---
FROM node:24-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

CMD ["node", "dist/index.js"]
EXPOSE 3000