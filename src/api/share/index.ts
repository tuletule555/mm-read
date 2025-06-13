import type { PageResult, ResponseBody } from '../typing'
import type { ShareDto } from './interface'
import http from '@/utils/request'

export async function addShare(data: ShareDto): Promise<ResponseBody<ShareDto>> {
  return http.post('/share', data)
}

export async function editShare(id: string, data: ShareDto): Promise<ResponseBody<ShareDto>> {
  return http.put(`/share/${id}`, data)
}

export async function getShares(query: any): Promise<PageResult<ShareDto>> {
  return http.get('/share', { params: query })
}

export async function getShare(id: string): Promise<ResponseBody<ShareDto>> {
  return http.get(`/share/${id}`)
}

// export async function getUserInfo(): Promise<any> {
//   return http.get('/auth/userInfo')
// }
