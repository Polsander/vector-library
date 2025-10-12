# --- Build stage ---
FROM node:24-alpine AS builder
WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# --- Serve stage ---
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy built files from builder stage
COPY --from=builder /app/dist ./

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
