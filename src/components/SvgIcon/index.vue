<script setup lang="ts" name="SvgIcon">
import { computed } from 'vue'
import { px2rem } from '@/utils'

interface SvgProps {
  name: string // 图标的名称 ==> 必传
  prefix?: string // 图标的前缀 ==> 非必传（默认为"icon"）
  width?: string | number
  height?: string | number
}

const props = withDefaults(defineProps<SvgProps>(), {
  prefix: 'icon',
  iconStyle: () => ({ width: '100px', height: '100px' }),
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const styles = computed(() => {
  const itemStyles: any = {}
  if (props.width) {
    itemStyles.width = px2rem(typeof props.width === 'number' ? `${props.width}px` : props.width)
  }
  if (props.height) {
    itemStyles.height = px2rem(typeof props.height === 'number' ? `${props.height}px` : props.height)
  }
  return itemStyles
})
</script>

<template>
  <svg :style="styles" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>
