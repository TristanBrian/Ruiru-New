const axios = require('axios');

async function sendStkPush(amount, phone) {
  const token = await generateToken();
  const date = new Date();
  const timestamp =
  date.getFullYear() +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  ("0" + date.getDate()).slice(-2) +
  ("0" + date.getHours()).slice(-2) +
  ("0" + date.getMinutes()).slice(-2) +
  ("0" + date.getSeconds()).slice(-2);

  //you can use momentjs to generate the same in one line 

  const shortCode = 174379; //sandbox -174379
  const consumerkey=qyrgffVu1C1xdKTcT9bJ5mesXBrWqNZDUV6R6dqODWARGcyI;
  const consumersecret=GdAD6NuKPGTteUeQSEhKDuL9SFZRK2azchU8V5bUOFWjw6ADKG9fd1JCN3N8t2hV;
    
  const passkey = base64.encode (consumersecret)
  const stk_password = new Buffer.from(shortCode + passkey + timestamp).toString(
        "base64"
      );

  //choose one depending on you development environment
  const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
  
  const headers = {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  };
//make requests to get data//
  const requestBody = {
    BusinessShortCode: shortcode,
    Password: stk_password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline", //till "CustomerBuyGoodsOnline"
    Amount: amount,
    PartyA: `254${phone}`,
    PartyB: shortcode,
    PhoneNumber: `254${phone}`,
    CallBackURL: "https://yourwebsite.co.ke/callbackurl",
    AccountReference: `254${phone}`,
    TransactionDesc: "test",
  };

  try {
    const response = await axios.post(url, requestBody, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
module.exports ={ sendStkPush};