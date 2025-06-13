import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetUno,
} from 'unocss'

import presetRemToPx from '@unocss/preset-rem-to-px'

// 刚使用unocss的朋友，可以借助这个工具： https://to-unocss.netlify.app

export default defineConfig({
  presets: [
    presetUno,
    presetAttributify,
    presetIcons({ warn: true, prefix: ['i-'], extraProperties: {
      display: 'inline-block',
    } }),
    // 为什么要用到这个插件？
    // 模板使用 viewport 作为移动端适配方案，unocss 默认单位为 rem
    // 所以需要转成 px，然后由 postcss 把 px 转成 vw/vh，完成适配
    presetRemToPx({
      // 这里为什么要设置基础字体大小？看下面这篇文章
      // https://juejin.cn/post/7262975395620618298
      baseFontSize: 4,
    }),
    presetMini(),
  ],
  shortcuts: {
    // shortcuts to multiple utilities
    'btn': 'px-6 py-3 rounded-3 border-none inline-block bg-green-400 text-white cursor-pointer !outline-none hover:bg-green-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    'wh-full': 'w-full h-full',
    'text-title': 'font-600 text-18 h-48 flex items-center',
    'flex-center': 'flex items-center justify-center',
    'bg-grey': 'bg-#F5F5F5',
    'color-gray-10': 'text-[var(--van-text-color)]',
    'color-gray-9': 'text-[var(--van-text-color)]',
    'color-gray-8': 'text-[var(--van-text-color-2)]',
    'color-gray-7': 'text-[var(--van-text-color-3)]',
    'color-primary': 'text-[var(--van-primary-color)]',
    'font-size-12': 'text-12 lh-18',
    'font-size-13': 'text-13 lh-18',
    'font-size-14': 'text-14 lh-20',
    'font-size-15': 'text-15 lh-20',
    'font-size-16': 'text-16 lh-22',
    'font-size-17': 'text-13 lh-22',
    'font-size-18': 'text-18 lh-24',
    'card': 'bg-[var(--van-background-2)] b-rd-4 ',
  },
})
