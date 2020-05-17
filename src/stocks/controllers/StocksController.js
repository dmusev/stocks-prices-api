import { processResponse, formatError } from '../../common'
import { CRYPTOCURRENCY_MAP_URI, CRYPTOCURRENCY_INFO_URI, SYMBOLS } from '../constants'
import { buildRequestOptions } from '../utils'
import requestPromise from 'request-promise'

class StocksController {
  async getCryptocurrencies (req, res, next) {
    // Build request specific options
    const requestOptions =
      buildRequestOptions(
        'GET',
        CRYPTOCURRENCY_MAP_URI,
        {
          'symbol': SYMBOLS
        }
      )

    try {
      const response = await requestPromise(requestOptions)
      const { data } = response

      if (!data) {
        res.status(404)
        return processResponse(res, req, next)
      }

      res.status(200)
      return processResponse(res, req, next, { data })
    } catch ({ error = {} }) {
      const formattedError = formatError(error)
      const { errorCode = 400 } = formatError

      res.status(errorCode)
      return processResponse(res, req, next, { formattedError })
    }
  }

  async getCryptocurrencyById (req, res, next) {
    const { id } = req && req.params

    // Build request specific options
    const requestOptions =
      buildRequestOptions(
        'GET',
        CRYPTOCURRENCY_INFO_URI,
        {
          id
        }
      )

    try {
      const response = await requestPromise(requestOptions)
      const { data } = response

      if (!data) {
        res.status(404)
        return processResponse(res, req, next)
      }

      res.status(200)
      return processResponse(res, req, next, { data })
    } catch ({ error = {} }) {
      const formattedError = formatError(error)
      const { errorCode = 400 } = formatError

      res.status(errorCode)
      return processResponse(res, req, next, { formattedError })
    }
  }
}

export default new StocksController()
