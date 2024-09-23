package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/smtp"
	"os"
)

// EmailRequest holds the form data sent from the frontend
type EmailRequest struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	Message   string `json:"message"`
}

// SendEmail handles sending an email via SMTP
func SendEmail(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	var emailRequest EmailRequest
	err := json.NewDecoder(r.Body).Decode(&emailRequest)
	if err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	// SMTP server configuration from environment variables
	smtpHost := os.Getenv("SMTP_HOST")
	smtpPort := os.Getenv("SMTP_PORT")
	senderEmail := os.Getenv("SMTP_EMAIL")
	senderPassword := os.Getenv("SMTP_PASSWORD")

	// Construct the email message
	to := "contact@silveriff.com"
	subject := "New Contact Form Submission"
	body := fmt.Sprintf(
		"You have a new message from %s %s (%s):\n\n%s",
		emailRequest.FirstName,
		emailRequest.LastName,
		emailRequest.Email,
		emailRequest.Message,
	)

	// Email message
	msg := []byte("To: " + to + "\r\n" +
		"Subject: " + subject + "\r\n" +
		"Reply-To: " + emailRequest.Email + "\r\n" +
		"\r\n" + body + "\r\n")

	// Set up authentication for the email server
	auth := smtp.PlainAuth("", senderEmail, senderPassword, smtpHost)

	// Send the email
	err = smtp.SendMail(smtpHost+":"+smtpPort, auth, senderEmail, []string{to}, msg)
	if err != nil {
		http.Error(w, "Failed to send email", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Email sent successfully"})
}
