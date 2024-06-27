<? php 
session_start ();
function db_conn()
{
    #shopadmin credentials
    $db_username ='root' ;
    $ db_password ='';

    #db_username 
    #db_password
}
$conn =new PDO (
     
)
$response = mpesa ($phone,$amount,$invoice);
#callback url
define ('callback_url','')

  # access token
  $consumerKey = 'nk16Y74eSbTaGQgc9WF8j6FigApqOMWr'; //Fill with your app Consumer Key
  $consumerSecret = '40fD1vRXCq90XFaU'; // Fill with your app Secret

  # define the variales
  # provide the following details, this part is found on your test credentials on the developer account
  $BusinessShortCode = '174379';
  $Passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';  
  
  /*
    This are your info, for
    $PartyA should be the ACTUAL clients phone number or your phone number, format 2547********
    $AccountRefference, it maybe invoice number, account number etc on production systems, but for test just put anything
    TransactionDesc can be anything, probably a better description of or the transaction
    $Amount this is the total invoiced amount, Any amount here will be 
    actually deducted from a clients side/your test phone number once the PIN has been entered to authorize the transaction. 
    for developer/test accounts, this money will be reversed automatically by midnight.
  */
  
   $PartyA = $_POST['phone']; // This is your phone number, 
  $AccountReference = '2255';
  $TransactionDesc = 'Test Payment';
  $Amount = $_POST['amount']; 