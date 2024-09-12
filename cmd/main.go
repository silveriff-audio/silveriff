package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	// Define the port
	port := os.Getenv("PORT")
	if port == "" {
		port = "7536"
	}

	// Define the path to the 'dist' directory where Vite builds output
	distDir := "./ui/dist"

	// Serve static assets from the 'dist' directory
	fs := http.FileServer(http.Dir(distDir))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// Serve index.html for all routes to support client-side routing
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// If the requested file doesn't exist, serve index.html
		filePath := filepath.Join(distDir, r.URL.Path)
		if _, err := os.Stat(filePath); os.IsNotExist(err) {
			http.ServeFile(w, r, filepath.Join(distDir, "index.html"))
			return
		}
		// Otherwise serve the requested file
		http.ServeFile(w, r, filePath)
	})

	// Start the server
	fmt.Printf("Server is running on port %s...\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
