import dotenv from 'dotenv'
dotenv.config()

const CRYPTOCURRENCY_MAP_URI = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map'
const CRYPTOCURRENCY_INFO_URI = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info'
const SYMBOLS = 'BTC,ETH,LTC,XLM,XMR,ETC,DOGE,BAT,ZIL'
const CMC_API_KEY = process.env.CMC_API_KEY

export {
  CRYPTOCURRENCY_MAP_URI,
  CRYPTOCURRENCY_INFO_URI,
  CMC_API_KEY,
  SYMBOLS
}
