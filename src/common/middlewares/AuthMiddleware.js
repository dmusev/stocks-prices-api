import { formatError } from '../../common'

export const isAuthenticated = async (req, res, next) => {
  // TODO: Implement real authentication
  try {
    return next()
  } catch (err) {
    return next(forbiddenResponse(res))
  }
}

export const forbiddenResponse = (res) => {
  const customError = {
    status: {
      error_code: '403',
      error_message: 'The provided token is invalid'
    }
  }

  const error = formatError(customError)
  res.status(403)

  return error
}
