package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Static("/mail", "mail")
	r.StaticFile("/", "apps_index/dist/index.html")
	r.Static("/assets", "apps_index/dist/assets")

	r.Run(":8080")
}
