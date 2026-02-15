# Multi-stage static site serve via nginx
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --silent || true
COPY . .
# no build step; static files in src
FROM nginx:stable-alpine
COPY --from=0 /app/src /usr/share/nginx/html
# Optional: replace default nginx conf (left as default)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
