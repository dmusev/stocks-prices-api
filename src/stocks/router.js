
import { isAuthenticated } from '../common'
import express from 'express'
import StocksController from './controllers/StocksController'

const router = express.Router()

router.get(
  '/cryptocurrencies',
  isAuthenticated,
  (req, res, next) => {
    StocksController.getCryptocurrencies(req, res, next)
  }
)

router.get(
  '/cryptocurrencies/:id',
  isAuthenticated,
  (req, res, next) => {
    StocksController.getCryptocurrencyById(req, res, next)
  }
)

export default router
