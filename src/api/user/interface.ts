export interface LoginInfo {
  username: string
  // phone: string
  password: string
}
export interface SignupInfo {
  username: string
  phone: string
  password: string
  inviter?: string
}
export interface User {
  id?: string
  phone?: string
  username?: string
  password?: string
  name?: string
  head_img?: Record<string, any>
  status?: string
  create_time?: string
  read_configs?: string | Record<string, any>
  description?: string
}
export interface ReadConfigs {
  direction?: 'vertical' | 'horizontal'
  gap: number
  fontSize: number
  lineHeight: number
  // turnPageConfig: number // 1左右,2上下
  transition: number
}
