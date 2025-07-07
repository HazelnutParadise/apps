FROM golang:1.23-alpine AS builder

# 安裝 bun
RUN apk add --no-cache curl unzip
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app
COPY . .

# 使用 bun 安裝依賴和構建
RUN cd apps_index && bun install
RUN cd apps_index && bun run build

RUN go mod tidy
RUN go build -o main .

FROM scratch
COPY --from=builder /app/main /main
COPY --from=builder /app/apps_index/dist /apps_index/dist
COPY --from=builder /app/mail /mail

CMD [ "/main" ]