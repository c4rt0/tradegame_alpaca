// require("dotenv").config();
const moment = require("moment");
const Alpaca = require("@alpacahq/alpaca-trade-api");
const alpaca = new Alpaca({
  keyId: process.env.APCA_API_KEY_ID,
  secretKey: process.env.APCA_API_SECRET_KEY,
  paper: true,
});

async function printAccount() {
  const account = await alpaca.getAccount();
  console.log(account);
}

printAccount();
// Get our account information.
alpaca.getAccount().then((account) => {
  // Check if our account is restricted from trading.
  if (account.trading_blocked) {
    console.log("Account is currently restricted from trading.");
  }

  // Check how much money we can use to open new positions.
  console.log(`$${account.buying_power} is available as buying power.`);
});

// Check if the market is open now.
alpaca.getClock().then((clock) => {
  console.log("The market is now " + clock.is_open ? "open." : "closed.");
});

//creating a function to check the price of an asset :
async function checkPrice() {
  let resp = alpaca.getBarsV2(
    "AAPL",
    {
      start: "2021-02-01",
      end: "2021-02-10",
      limit: 2,
      timeframe: "1Day",
      adjustment: "all",
    },
    alpaca.configuration
  );
  const bars = [];

  for await (let b of resp) {
    bars.push(b);
  }
  console.log(bars);
}

checkPrice();
