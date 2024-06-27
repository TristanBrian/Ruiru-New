const express = require('express');
const app = express();
const cors = require('cors');
const { sendStkPush } = require('./stk_push');
const config = require('./config'); // import config file
const port = process.env.PORT || 3000; // get the port from the .env file or default to 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/stk', async (req, res) => {
  const { amount, phone } = req.body;

  try {
    const response = await sendStkPush(amount, phone, config.shortcode, config.passKey);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

app.post('/callback', (req, res) => {
  const { ResultCode, ResultDesc } = req.body;
  if (ResultCode === 0) {
    // process callback response
    res.json({ message: 'Callback response processed successfully' });
  } else {
    res.status(400).json({ error: 'Invalid callback response' });
  }
});

app.listen(port, () => {
  console.log(`App is running at localhost:${port}`);
});