const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`App is running at localhost:${port}`);
});

app.get('/', async (req, res) => {
  res.send('Welcome to my app!');
});

app.post('/stk', async (req, res) => {
  const phone = req.body.phone.substring(1);
  const amount = req.body.amount;

  try {
    const { sendStkPush } = require('./stk_push');
    const response = await sendStkPush(amount, phone);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});