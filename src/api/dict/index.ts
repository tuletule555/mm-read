import type { ResponseBody } from '../typing'
import type { DictDto } from './interface'
import http from '@/utils/request'

export async function getDictByType(type: string): Promise<ResponseBody<DictDto[]>> {
  return http.get(`/dict/${type}`)
}
