package main

import (
	"github.com/gin-gonic/gin"
)

type EmailRequest struct {
	Recipient string `json:"recipient"`
	Type      string `json:"type"`
	Subject   string `json:"subject"`
	Content   string `json:"content"`
}

func main() {
	r := gin.Default()

	r.Static("/mail", "mail")
	r.StaticFile("/", "apps_index/dist/index.html")
	r.Static("/assets", "apps_index/dist/assets")

	r.Run(":8080")
}
