# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files untuk install dependency dulu (optimasi cache)
COPY package*.json ./
RUN npm install

# Copy semua file project
COPY . .

# Build aplikasi Nuxt
RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS runner

WORKDIR /app

# Salin hasil build dari stage sebelumnya
COPY --from=builder /app/.output ./.output

# Ekspos port default Nuxt
EXPOSE 3000

# Jalankan server Nuxt
CMD ["node", ".output/server/index.mjs"]