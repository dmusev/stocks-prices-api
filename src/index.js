import express from 'express'
import logger from 'morgan'
import router from './router'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import { handleErrors } from './common'

const expressApp = express()
const { NODE_PORT } = process.env
const allowedOrigins = ['http://localhost:3000']

// Log requests to the console.
expressApp.use(logger('dev'))
// Parse incoming requests data (https://github.com/expressjs/body-parser)
expressApp.use(json())
expressApp.use(urlencoded({ extended: false }))

expressApp.use('/', cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true)
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.'
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  }
}), router, handleErrors)

expressApp.set('port', NODE_PORT)

export default expressApp
