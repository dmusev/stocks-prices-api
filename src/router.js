
import express from 'express'
import { StocksRouter } from './stocks'

const router = express.Router()

router.use('/stocks', StocksRouter)

export default router
