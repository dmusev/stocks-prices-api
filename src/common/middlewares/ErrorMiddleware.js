'use strict'

import { processClientErrors, processServerErrors } from '../index'

export const handleErrors = (err, req, res, next) => {
  switch (res.statusCode) {
    case 403:
      err.title = 'Not authenticated'
      processClientErrors(err, req, res)
      break
    case 404:
      err.title = 'Data not found'
      processClientErrors(err, req, res)
      break
    case 422:
      err.title = 'Unprocessable Entity'
      processClientErrors(err, req, res)
      break
    case 500:
      processServerErrors(err, req, res)
      break
    default:
      err.title = 'Bad Request'
      return processClientErrors(err, req, res)
  }
}
