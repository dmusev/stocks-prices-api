import { CMC_API_KEY } from '../constants'

export const buildRequestOptions = (method, uri, qs) => {
  return {
    method,
    uri,
    qs,
    headers: {
      'X-CMC_PRO_API_KEY': CMC_API_KEY
    },
    json: true,
    gzip: true
  }
}
