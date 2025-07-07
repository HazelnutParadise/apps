package main

import (
	"bytes"
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
			// 讀取請求體
			body, err := c.GetRawData()
			if err != nil {
				c.JSON(http.StatusBadRequest, gin.H{"error": "無法讀取請求體"})
				return
			}

			// 發送請求到郵件服務
			resp, err := http.Post("http://sendemail/SendEmail", "application/json", bytes.NewBuffer(body))
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": "郵件發送失敗"})
				return
			}
			defer resp.Body.Close()

			// 檢查響應狀態
			if resp.StatusCode != http.StatusOK {
				c.JSON(resp.StatusCode, gin.H{"error": "郵件服務返回錯誤"})
				return
			}

			c.JSON(http.StatusOK, gin.H{"status": "email sent"})
		})
	}

	r.Run(":8080")
}
