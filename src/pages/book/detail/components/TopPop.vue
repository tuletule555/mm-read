<script setup lang="ts">
interface Props {
  book?: Record<string, any>
  isCurrentMark?: boolean
}
const props = withDefaults(defineProps<Props>(), {
})
const show = ref<boolean>(false)
function onOpen() {
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
  <van-popup
    v-model:show="show"
    position="top"
    :overlay="false"
    :lock-scroll="false"
  >
    <VanNavBar
      :title="props.book?.name"
      clickable
      :placeholder="true"
      :left-arrow="true"
      v-bind="$attrs"
      @click-left="onBack"
    >
      <template #right>
        <svg
          v-if="isCurrentMark"
          class="bookmark-indicator"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 2C4.89543 2 4 2.89543 4 4V21C4 21.5523 4.44772 22 5 22C5.27614 22 5.52678 21.8946 5.70711 21.7071L12 15.4142L18.2929 21.7071C18.6834 22.0976 19.3166 22.0976 19.7071 21.7071C19.8946 21.5268 20 21.2761 20 21V4C20 2.89543 19.1046 2 18 2H6Z" />
        </svg>
      </template>
    </VanNavBar>
  </van-popup>
</template>

<style lang="scss" scoped>
.slider {
  --van-slider-bar-height: 8px;
}
.bookmark-indicator {
  top: 0;
  right: 12px;
  z-index: 10;
  width: 28px;
  height: 28px;
  color: var(--van-primary-color);
  padding: 4px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  user-select: none;
  pointer-events: none;
}
</style>
