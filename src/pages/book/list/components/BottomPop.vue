<script setup lang="ts">
import { removeBooks, setTypeBooks } from '@/api/book'
import type { BookDto } from '@/api/book/interface'

interface Props {
  selectedBook?: BookDto[]
  optionType?: any[]
}
const props = withDefaults(defineProps<Props>(), {
})

const emits = defineEmits(['cancel', 'callback'])

const showSelectType = ref<boolean>(false)
const typeActions = ref([])

const list = [{
  value: 'delete',
  label: '删除',
  icon: 'i-uil:trash-alt',
  action: () => {
    removeBooks({ ids: props.selectedBook.map(item => item.id) })
    emits('callback')
  },
}, {
  value: 'setType',
  label: '移动分类',
  icon: 'i-uil:tag-alt',
  action: () => {
    showSelectType.value = true
  },
}]

const show = ref<boolean>(false)

function onOpen() {
  typeActions.value = props.optionType?.slice(1)?.map((item) => {
    return {
      name: item.text,
      callback: () => {
        setTypeBooks({ ids: props.selectedBook.map(item => item.id), type: item.value })
        showSelectType.value = false
        emits('callback')
      },
    }
  })
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

function onActiveSettingChange(item) {
  item.action()
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
      <van-grid :border="true" direction="vertical" class="" :column-num="2">
        <van-grid-item v-for="item in list" :key="item.label" @click="onActiveSettingChange(item)">
          <template #default>
            <i class="h-28 w-28" :class="item.icon" />
            <div>{{ item.label }}</div>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
  </van-popup>
  <van-action-sheet v-model:show="showSelectType" :actions="typeActions" />
</template>

<style lang="scss" scoped>
.slider {
  --van-slider-bar-height: 8px;
}
</style>
