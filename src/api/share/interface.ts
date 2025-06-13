import type { BookDto } from '../book/interface'

export interface ShareDto {
  id?: string // 标记为主键，值自动生成
  content?: string // 内容
  title?: string // 标题
  book_id?: string // 书籍id
  book?: BookDto // 书籍
  public?: number // 是否公开1,0
  type?: string // 类型
}
