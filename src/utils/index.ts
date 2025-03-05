export function px2rem(px: string) {
  if (/%/.test(px)) {
    // 有百分号%，特殊处理，表述pc是一个有百分号的数，比如：90%
    return px
  }
  else {
    return `${Number.parseFloat(px) / 37.5}rem` // 这里的37.5，和rootValue值对应
  }
}
