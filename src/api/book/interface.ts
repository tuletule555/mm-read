export interface BookDto {
  id?: string // 标记为主键，值自动生成
  name?: string // 书名
  image_id?: string // 封面图片i
  progress?: number // 阅读进度
  book_id?: string // 文件id
  status?: number // 状态，1-正常，0-禁用
  create_user_id?: string // 创建人
  create_time?: Date // 创建时间
  bookmark?: string | Array<any>
}
export interface BookRecordDto {
  id?: string // 标记为主键，值自动生成
  book_id?: string // 书id
  time?: number // 时间，单位min
  date?: Date // 日期
  create_user_id?: string // 创建人
}
