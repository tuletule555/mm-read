import type { ResponseBody } from '../typing'
import type { LoginInfo, SignupInfo, User } from './interface'
import http from '@/utils/request'

export async function login(data: LoginInfo): Promise<any> {
  return http.post('/auth/login', data)
}

export async function signup(data: SignupInfo): Promise<any> {
  return http.post('/auth/signup', data)
}

export async function getUserInfo(): Promise<ResponseBody<User>> {
  return http.get('/auth/userInfo')
}

export async function editUser(data): Promise<any> {
  return http.put(`/user`, data)
}
