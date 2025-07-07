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
		apiGp.POST("/send-email", func(c *gin.Context) {
			// 發送請求到郵件服務
			resp, err := http.Post("http://sendemail/SendEmail", "application/json", c.Request.Body)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": "郵件發送失敗"})
				return
			}
			defer resp.Body.Close()

			c.JSON(http.StatusOK, gin.H{"status": "email sent"})
		})
	}

	r.Run(":8080")
}
