export interface ResponseBody<T = any> {
  message?: string
  code?: number
  data?: T
  success: boolean
}

/** 统一返回结构体 */

export interface PageResult<T = any> {
  message?: string
  code?: number
  data?: { items: T[], count: number }
  success: boolean
}
