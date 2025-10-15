# --- Build stage ---
FROM node:24-alpine AS builder
WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm install

COPY src ./src
RUN npm run build

# --- Runtime stage ---
FROM node:24-alpine
ENV NODE_ENV=production
WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

CMD ["node", "dist/app.js"]
EXPOSE 3000