<script setup lang="ts">
interface Props {
  current?: number
  total?: number
  configs?: Record<string, any>
  book?: Record<string, any>
  isCurrentMark?: boolean
}
const props = withDefaults(defineProps<Props>(), {
})

const emits = defineEmits(['currentChange', 'configsChange'])

const list = [{
  value: 'bookmark',
  label: '书签',
  icon: 'i-uil:bookmark',
}, {
  value: '_current',
  label: '进度',
  icon: 'i-uil:slider-h',
}, {
  value: 'font',
  label: '字体',
  icon: 'i-uil:font',
}, {
  value: 'setting',
  label: '设置',
  icon: 'i-uil:setting',
}]

const show = ref<boolean>(false)
const _current = ref<number>()
const _configs = ref<Record<string, any>>({})
function onOpen() {
  _current.value = props.current
  _configs.value = props.configs
  show.value = true
}
function onClose() {
  show.value = false
}
function onToggle() {
  if (show.value) {
    onClose()
  }
  else {
    onOpen()
  }
  return show.value
}

const activeSetting = ref(list[1])
function onActiveSettingChange(item) {
  if (activeSetting.value?.value !== item.value) {
    activeSetting.value = item
  }
}
function onBack() {
  history.back()
}

defineExpose({
  onOpen,
  onClose,
  onToggle,
})
</script>

<template>
  <van-popup v-model:show="show" position="top" :overlay="false" :lock-scroll="false">
    <VanNavBar
      :title="props.book?.name"
      clickable
      :placeholder="true"
      :left-arrow="true"
      v-bind="$attrs"
      @click-left="onBack"
    >
      <template #right>
        <i v-if="isCurrentMark" class="i-uil:bookmark h-24 w-24" />
      </template>
    </VanNavBar>
  </van-popup>
</template>

<style lang="scss" scoped>
.slider {
  --van-slider-bar-height: 8px;
}
</style>
