package main

import (
	"fmt"

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
	r.GET("/assets/:filename", func(c *gin.Context) {
		filename := c.Param("filename")
		fmt.Print(filename)
		c.File("apps_index/dist/assets/" + filename)
	})
	r.Run(":8080")
}
