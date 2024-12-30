FROM golang:1.23-alpine

# 安裝 nodejs 和 vite
RUN apk add --no-cache nodejs npm
RUN npm install -g vite

WORKDIR /app
COPY . .

# 安裝 apps_index 目錄中的依賴
RUN cd apps_index && npm install
RUN cd apps_index && vite build

RUN cd ../
RUN go mod tidy
RUN go build -o main .

ENTRYPOINT ["/app/main"]