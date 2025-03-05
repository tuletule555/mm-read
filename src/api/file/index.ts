import http from '@/utils/request'

export async function uploadFile(data): Promise<any> {
  return http.post('/file/upload', data, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  })
}
export async function uploadBook(data): Promise<any> {
  return http.post('/file/uploadBook', data, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  })
}
