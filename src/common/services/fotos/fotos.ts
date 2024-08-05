import { httpsRequest } from '../http-request'

export const FotosService = () => {
  const { get, configRequest } = httpsRequest()

  const getFotos = async ({ pageParam = 1 }: { pageParam?: number }): Promise<any> => {
    configRequest({ endpoint: `photos?_page=${pageParam}` })
    let res = await get<any[]>()
    console.log(res)

    if (Array.isArray(res)) {
      return {
        data: res.map((photo) => ({
          title: photo.title,
          url: photo.thumbnailUrl,
          id: photo.id
        })),
        nextCursor: pageParam + 1 // Incrementa el cursor para la siguiente página
      }
    } else {
      throw new Error('Unexpected response format')
    }
  }

  return {
    getFotos
  }
}
