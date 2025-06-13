/**
 * v-longpress
 * 长按指令，长按时触发事件
 */
import type { Directive } from 'vue'

const directive: Directive = {
  beforeMount(el, binding) {
    const cb = binding.value
    if (typeof cb !== 'function')
      return console.warn('v-longpress指令必须接收一个回调函数')
    let timer = null
    // 重置计时器
    const cancel = () => {
      if (timer !== null) {
        clearTimeout(timer)
        timer = null
      }
    }
    const start = () => {
      if (timer === null) {
        timer = setTimeout(() => {
          cb()
          timer = null
        }, 1000)
      }
    }
    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start)
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', cancel)
    el.addEventListener('touchcancel', cancel)
    // or - 长按后移出元素外是否还有效
    // el.addEventListener('mouseup', cancel);
  },
  unmounted(el) {
    el.removeEventListener('mousedown', () => {})
    el.removeEventListener('touchstart', () => {})
    el.removeEventListener('click', () => {})
    el.removeEventListener('mouseout', () => {})
    el.removeEventListener('touchend', () => {})
    el.removeEventListener('touchcancel', () => {})
  },
}

export default directive
