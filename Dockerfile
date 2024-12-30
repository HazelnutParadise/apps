FROM golang:1.23-alpine AS builder

# 安裝 nodejs 和 vite
RUN apk add --no-cache nodejs npm
RUN npm install -g vite

WORKDIR /app
COPY . .

# 安裝 apps_index 目錄中的依賴
RUN cd apps_index && npm install
RUN cd apps_index && vite build

RUN go mod tidy
RUN go build -o main .

FROM scratch
COPY --from=builder /app/main /app/main
COPY --from=builder /app/apps_index/dist /app/apps_index/dist
COPY --from=builder /guess-the-weather /guess-the-weather
COPY --from=builder /mail /mail
COPY --from=builder /TSPP-plus /TSPP-plus

ENTRYPOINT ["/app/main"]