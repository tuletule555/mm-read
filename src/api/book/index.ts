import type { ResponseBody } from '../typing'
import type { BookDto } from './interface'
import http from '@/utils/request'

export async function getBooks(query: Record<string, any>): Promise<ResponseBody<BookDto[]>> {
  return http.get(`/book`, { params: query })
}

export async function getBook(id: BookDto['id']): Promise<ResponseBody<BookDto>> {
  return http.get(`/book/${id}`)
}

export async function createBook(params: BookDto): Promise<ResponseBody<BookDto>> {
  return http.post(`/book`, params)
}

export async function removeBook(id: BookDto['id']): Promise<ResponseBody<BookDto>> {
  return http.delete(`/book/${id}`)
}
export async function removeBooks(data): Promise<ResponseBody<BookDto>> {
  return http.delete(`/book`, { data })
}
export async function setTypeBooks(data): Promise<ResponseBody<BookDto>> {
  return http.put(`/book/setType`, data)
}

export async function updateBook(id: BookDto['id'], params: BookDto): Promise<ResponseBody<BookDto>> {
  return http.put(`/book/${id}`, params)
}

export async function getTotal(): Promise<ResponseBody<BookDto>> {
  return http.get(`/book/total`)
}
