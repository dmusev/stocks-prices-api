export const processResponse = (res, req, next, params = {}) => {
  const { formattedError, data } = params
  // In case we have formatted error
  if (formattedError) {
    return next(formattedError)
  }

  if (!req.route) {
    res.status(404)
  }

  switch (res.statusCode) {
    case 200:
      res.send(data)
      break
    case 204:
      res.send()
      break
    case 404:
      res.send()
      break
    default:
      return next()
  }
  return next()
}
