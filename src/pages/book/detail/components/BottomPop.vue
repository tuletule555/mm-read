<script setup lang="ts">
import useAppStore from '@/stores/modules/app'

interface Props {
  current: number
  total: number
  configs: Record<string, any>
  book?: Record<string, any>
  chapters?: Array<any>
}
const props = withDefaults(defineProps<Props>(), {
})

const emits = defineEmits(['currentChange', 'configsChange', 'chapterChange'])

const list = [{
  value: 'chapter',
  label: '章节',
  icon: 'i-uil:list-ul',
}, {
  value: 'bookmark',
  label: '书签',
  icon: 'i-uil:bookmark',
}, {
  value: 'progress',
  label: '进度',
  icon: 'i-uil:slider-h',
}, {
//   value: 'font',
//   label: '字体',
//   icon: 'i-uil:font',
// }, {
  value: 'setting',
  label: '设置',
  icon: 'i-uil:setting',
}]

const route = useRoute()

const show = ref<boolean>(false)
const _current = ref<number>()
const _configs = ref<Record<string, any>>({})
const checked = ref<boolean>(isDark.value)
const appStore = useAppStore()
function toggle() {
  toggleDark()
  appStore.switchMode(isDark.value ? 'dark' : 'light')
  route.meta.themeColor = isDark.value ? '#222222' : '#f7f8fa'
}

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

const activeSetting = ref(list[2])
function onActiveSettingChange(item) {
  if (activeSetting.value?.value !== item.value) {
    activeSetting.value = item
  }
}
function onProgressChange(v) {
  emits('currentChange', v)
}
function onConfigsChange() {
  emits('configsChange', _configs.value)
}
function onChapterChange(item) {
  emits('chapterChange', item)
}

defineExpose({
  onOpen,
  onClose,
  onToggle,
})
</script>

<template>
  <van-popup v-model:show="show" position="bottom" :overlay="false" :lock-scroll="false">
    <div style="padding-bottom: env(safe-area-inset-bottom);">
      <div v-if="activeSetting.value === 'chapter'" class="max-h-400 overflow-auto pl4 pr4">
        <div class="mb-8 font-size-20" />
        <van-list class="max-h-200">
          <van-cell v-for="item in props.chapters || []" :key="item" :title="item.title" @click="onChapterChange(item)" />
        </van-list>
      </div>
      <div v-if="activeSetting.value === 'bookmark'" class="max-h-100% overflow-auto pl4 pr4">
        <van-list class="max-h-200">
          <van-cell v-for="item in props.book?.bookmark || []" :key="item" :title="`进度：${Math.round(item.progress * 10000) / 100}%`" @click="onProgressChange(Math.round(item.progress * props.total))" />
        </van-list>
      </div>
      <div v-if="activeSetting.value === 'progress'" class="flex-center p30">
        <van-slider v-model="_current" class="slider" :min="1" :max="props.total" @change="onProgressChange">
          <template #button>
            <div class="h-18 min-w-24 flex-center b-rd-8 bg-white p4 font-size-12 color-gray-8 shadow-sm">
              {{ _current }}
            </div>
          </template>
        </van-slider>
      </div>
      <div v-if="activeSetting.value === 'font'" class="max-h-100% overflow-auto pl4 pr4 pt10">
        <van-form>
          <van-field name="fontSize" label="字体大小" input-align="right">
            <template #input>
              <van-stepper v-model="_configs.fontSize" min="10" max="30" @change="onConfigsChange" />
            </template>
          </van-field>
          <van-field name="lineHeight" label="行高" input-align="right">
            <template #input>
              <van-stepper v-model="_configs.lineHeight" min="10" max="40" @change="onConfigsChange" />
            </template>
          </van-field>
        </van-form>
      </div>
      <div v-if="activeSetting.value === 'setting'" class="pl4 pr4 pt10">
        <van-form>
          <van-field name="fontSize" label="字体大小" input-align="right">
            <template #input>
              <van-stepper v-model="_configs.fontSize" min="10" max="30" @change="onConfigsChange" />
            </template>
          </van-field>
          <van-field name="lineHeight" label="行高" input-align="right">
            <template #input>
              <van-stepper v-model="_configs.lineHeight" min="10" max="40" @change="onConfigsChange" />
            </template>
          </van-field>
          <van-field name="fontSize" label="翻页动效" input-align="right">
            <template #input>
              <van-switch v-model="_configs.transition" @change="onConfigsChange" />
            </template>
          </van-field>
          <van-field name="dark" label="暗黑模式" input-align="right">
            <template #input>
              <van-switch v-model="checked" @change="toggle()" />
            </template>
          </van-field>
        </van-form>
      </div>
      <van-grid :border="true" direction="horizontal" class="">
        <van-grid-item v-for="item in list" :key="item.label" @click="onActiveSettingChange(item)">
          <template #default>
            <i class="h-28 w-28" :class="item.icon" />
          <!-- <div>{{ item.label }}</div> -->
          </template>
        </van-grid-item>
      </van-grid>
    </div>
  </van-popup>
</template>

<style lang="scss" scoped>
.slider {
  --van-slider-bar-height: 8px;
}
</style>
