# Readme

In order to run the application: 
* clone this repository, 
* register with Alpaca, 
* read alpaca documentation (https://alpaca.markets/docs/api-documentation/)
* add ".env" file as per example

* run :
```bash
npm install
```
* start an application with:
```bash
node ./index.js
```

You should see response from Alpaca API with your credentials and buying power.

Steps I took until now:
1.
```bash
npm init
```

2. install dotenv
```bash
npm install dotenv
```
3. install alpaca:

```bash
npm install @alpacahq/alpaca-trade-api
```