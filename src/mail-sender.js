const fetch = require('node-fetch');

class EmailSender {
  constructor(apiToken, apiUrl) {
    this.apiToken = apiToken;
    this.apiUrl = apiUrl;
  }
  
  async send(
    senderName,
    senderEmail,
    recipientName,
    recipientEmail,
    subject,
    text,
    html,
    attachments = []
  ) {
    const payload = {
      from: {
        name: senderName,
        email: senderEmail
      },
      to: [
        {
          name: recipientName,
          email: recipientEmail
        }
      ],
      subject,
      text,
      html,
      attachments
    };

    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': this.apiToken
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Failed to send email.');
    }

    return response.json();
  }
}

module.exports = EmailSender;