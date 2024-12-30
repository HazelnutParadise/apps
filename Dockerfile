FROM golang:1.23-alpine

# 安裝 nodejs vite
RUN apk add --no-cache nodejs npm
RUN npm install -g create-vite

WORKDIR /app
COPY . .

RUN cd /apps_index
RUN vite build

RUN cd ../
RUN go mod tidy
RUN go build -o main .

ENTRYPOINT ["/app/main"]