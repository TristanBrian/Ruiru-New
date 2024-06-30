# M-Pesa STK Push Payment Integration (server.mjs)

This repository contains server-side code to facilitate M-Pesa STK push payments using Safaricom's Daraja API. This integration allows you to initiate payments from a web application to a customer's M-Pesa account.

## Prerequisites

Before you start, ensure you have the following:

- Node.js installed on your machine (version 14 or later recommended).
- npm or yarn package manager installed.
- Safaricom Daraja API credentials (Consumer Key and Consumer Secret).
- Business Shortcode and Passkey provided by Safaricom.

## Installation

1. Clone the repository:

   ```bash
   git clone ...
   cd ...
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure API Credentials:

   Replace the placeholders in `server.mjs` with your actual credentials:
   - `consumerKey`: Your Safaricom Daraja API Consumer Key.
   - `consumerSecret`: Your Safaricom Daraja API Consumer Secret.
   - `businessShortCode`: Your Safaricom Business Shortcode.
   - `passkey`: Your Safaricom STK Push Passkey.

4. Start the Server:

   ```bash
   node --experimental-modules server.mjs
   ```

   This will start the server at `http://localhost:3000` by default.

## Usage

### Generating Access Token

Endpoint: `GET /generate-token`

This endpoint fetches the OAuth access token required for authenticating subsequent API requests.

### Initiating STK Push Payment

Endpoint: `POST /stkpush`

This endpoint initiates an STK push payment request to a customer's M-Pesa account.

#### Request Body

```json
{
  "amount": "100",
  "phone": "2547XXXXXXXX",
  "accountReference": "CompanyXLTD",
  "transactionDesc": "Payment for goods"
}
```

- `amount`: The amount to be paid by the customer.
- `phone`: The customer's phone number in international format (e.g., 2547XXXXXXXX).
- `accountReference`: Optional. A reference to identify the transaction (e.g., an order number).
- `transactionDesc`: Optional. Description of the transaction.

#### Response

Upon successful initiation, the response will provide details of the STK push request.

### Error Handling

Errors are handled both at the API level and within the application logic. Responses include appropriate HTTP status codes and error messages.

## Notes

- Ensure your Node.js version supports ECMAScript modules (ESM). Use Node.js version 14 or later with the `--experimental-modules` flag for `.mjs` files.
- Use environment variables or a secure configuration management strategy to store sensitive credentials.
- For production deployment, ensure your server is accessible via HTTPS to comply with M-Pesa API security requirements.

---

This README provides an overview of how to set up and use the M-Pesa STK Push Payment integration provided in the `server.mjs` file. Adjustments may be needed based on your specific application requirements and environment setup.