# ---------- 1) PRUNE ----------
FROM node:20-alpine AS prune
WORKDIR /repo
COPY . .
ARG SCOPE
RUN npx --yes turbo@^2 prune --scope=$SCOPE --docker

# ---------- 2) DEPS ----------
FROM node:20-alpine AS deps
WORKDIR /repo
ENV CI=1
RUN apk add --no-cache libc6-compat python3 make g++
RUN corepack enable && corepack prepare pnpm@9.12.0 --activate
COPY --from=prune /repo/out/json/ ./
RUN pnpm fetch --frozen-lockfile
COPY --from=prune /repo/out/full/ ./
RUN pnpm install --frozen-lockfile --offline

# ---------- 3) BUILD ----------
FROM node:20-alpine AS build
WORKDIR /repo
ENV NEXT_TELEMETRY_DISABLED=1
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@9.12.0 --activate
COPY --from=deps /repo/ ./
ARG APP_DIR
WORKDIR /repo/${APP_DIR}
RUN pnpm run build

# ---------- 4) RUNTIME ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Hangi app'i çalıştıracağımızı arg ile alıyoruz (apps/home veya apps/cart)
ARG APP_DIR

# 1) Standalone çıktıyı köke aç (içinde apps/<app>/server.js var)
COPY --from=build /repo/${APP_DIR}/.next/standalone ./

# 2) Static & public'i ilgili APP_DIR altına koy
COPY --from=build /repo/${APP_DIR}/.next/static ./${APP_DIR}/.next/static
COPY --from=build /repo/${APP_DIR}/public       ./${APP_DIR}/public

# 3) Çalışma dizinini app klasörüne al, orada server.js var
WORKDIR /app/${APP_DIR}

EXPOSE 3000
CMD ["node", "server.js"]
