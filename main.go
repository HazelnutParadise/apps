package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/TSPP-plus", func(c *gin.Context) {
		c.Redirect(301, "/tspp-plus")
	})

	r.Static("/tspp-plus", "TSPP-plus")
	r.Static("/mail", "mail")
	r.Static("/guess-the-weather", "guess-the-weather")
	r.StaticFile("/", "apps_index/dist/index.html")
	r.Static("/assets", "apps_index/dist/assets")

	r.Run(":8080")
}
