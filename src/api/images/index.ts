import type { PageResult, ResponseBody } from '../typing'
import type { ImageDto } from './interface'
import http from '@/utils/request'

export async function addImage(data: ImageDto): Promise<ResponseBody<ImageDto>> {
  return http.post('/image', data)
}

export async function getImages(data: any): Promise<PageResult<ImageDto>> {
  return http.get('/image', data)
}

// export async function getUserInfo(): Promise<any> {
//   return http.get('/auth/userInfo')
// }
