import { HttpRequestParam } from '@/interfaces/http-request'
import { DOMAIN } from '@constants/domains'

export const httpsRequest = () => {
  let https = 'https://'
  let endpoint = ''
  let headers: Record<string, string> | undefined = {
    'Content-Type': 'application/json'
  }

  const configRequest = (param: HttpRequestParam) => {
    if (param.headers) headers = param.headers
    endpoint = param.endpoint
  }

  const urlBuilder = () => {
    return `${https}${DOMAIN}/${endpoint}`
  }

  async function get<T>(): Promise<T> {
    console.log(urlBuilder())
    const response = await fetch(urlBuilder())
    const data = await response.json()
    return data
  }

  return {
    configRequest,
    urlBuilder,
    get
  }
}
