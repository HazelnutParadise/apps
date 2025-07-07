FROM oven/bun:1.2.18 AS bun-builder

WORKDIR /app
COPY . .

# 使用 bun 安裝依賴和構建
RUN cd apps_index && bun install
RUN cd apps_index && bun run build

FROM golang:1.23-alpine AS gin-builder

WORKDIR /app
COPY . .

RUN go mod tidy
RUN go build -o main .

FROM scratch
COPY --from=gin-builder /app/main /main
COPY --from=bun-builder /app/apps_index/dist /apps_index/dist

CMD [ "/main" ]