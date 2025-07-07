package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Static("/mail", "mail")
	r.StaticFile("/", "apps_index/dist/index.html")
	r.Static("/assets", "apps_index/dist/assets")

	apiGp := r.Group("/api")
	{
		apiGp.GET("/send-email", func(c *gin.Context) {
			http.Post("http://sendemail/SendEmail", "application/json", c.Request.Body)
			c.JSON(http.StatusOK, gin.H{"status": "email sent"})
		})
	}

	r.Run(":8080")
}
