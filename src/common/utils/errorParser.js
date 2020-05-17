export const processClientErrors = (error, req, res) => {
  const processedErrors = {
    status: res.statusCode,
    error
  }

  return res.send(processedErrors)
}

export const processServerErrors = (err, req, res, next) => {
  console.error('Server error', err)
  return res.send('Server error')
}

export const formatError = ({ status = {} }) => {
  const {
    error_code: errorCode = 404,
    error_message: errorMessage = 'No data found!'
  } = status

  return {
    errorCode,
    errorMessage
  }
}
