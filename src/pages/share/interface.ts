export interface ImageDto {
  id?: string // 标记为主键，值自动生成
  phone_image_ids?: string[] // 手机壁纸数组
  pad_image_ids?: string[] // 平板壁纸数组
  pc_image_ids?: string[] // 电脑壁纸数组
  image_ids?: string[] // 其他图片数组
  title?: string // 标题
  description?: string // 描述
  type?: string // 类型
  styles?: string // 风格数组
  points?: number // 积分
  status?: number // 状态，1-正常，0-禁用
  create_user_id?: string // 创建人
  create_time?: Date // 创建时间
}
