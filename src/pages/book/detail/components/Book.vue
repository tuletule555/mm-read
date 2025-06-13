<script setup lang="ts">
import { computed, defineExpose, nextTick, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import useUserStore from '@/stores/modules/user'

const props = defineProps<{
  text: string
  modelValue?: number
}>()
const emit = defineEmits(['update:modelValue', 'change'])

const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const config = computed(() => ({
  gap: 16,
  fontSize: 20,
  lineHeight: 28,
  direction: 'horizontal',
  transition: true,
  scrollMode: false,
  ...JSON.parse(userInfo.value?.read_configs as string || '{}'),
}))

const containerRef = ref<HTMLElement | null>(null)
const chapters = ref<{ name: string, index: string, content: string[], progress: number }[]>([])
const currentPage = ref(0)
const totalPages = ref(1)

const PAGE_WIDTH = window.innerWidth

// Function to split text into chapters and content
function splitChapters(text: string) {
  const chapters: { name: string, index: string, content: string[], progress: number }[] = []
  const lines = text
    .replace('<', '&lt;')
    .replace('>', '&gt;')
    .replace('script', '')
    .split('\n')

  let currentChapter: { name: string, index: string, content: string[], progress: number } | null = null

  let pageCounter = 0 // 章节页计数器（粗略，每章一页，可后续 refine）
  lines.forEach((line) => {
    const isChapterTitle = /^第\s*[一二三四五六七八九十百千万\d]+\s*[章回].*/.test(line)

    if (isChapterTitle) {
      const progress = (pageCounter * PAGE_WIDTH) / (totalPages.value * PAGE_WIDTH || 1)
      const chapter = {
        name: line,
        index: `${chapters.length}`,
        content: [],
        progress, // <== 章节对应进度值
      }
      chapters.push(chapter)
      currentChapter = chapter
      pageCounter++ // 粗略：每章初始+1页
    }
    else {
      if (currentChapter) {
        currentChapter.content.push(line.trim())
      }
    }
  })

  return chapters
}

const contentStyle = computed(() => ({
  columnWidth: `${PAGE_WIDTH}px`,
  columnGap: `0px`,
  fontSize: `${config.value.fontSize}px`,
  lineHeight: `${config.value.lineHeight}px`,
  height: '100%',
  scrollBehavior: config.value.transition ? 'smooth' : 'auto',
}))

function scrollToPage(page: number) {
  if (!containerRef.value)
    return

  const el = containerRef.value

  // 临时关闭 smooth
  el.style.scrollBehavior = 'auto'
  el.scrollLeft = page * PAGE_WIDTH

  if (config.value.transition) {
    // 下一帧恢复 smooth（仅当 transition 开启）
    requestAnimationFrame(() => {
      el.style.scrollBehavior = 'smooth'
    })
  }
}
function updateScrollToProgress(progress: number) {
  nextTick(() => {
    const page = Math.round(progress * totalPages.value)
    scrollToPage(page)
  })
}
function calculatePages() {
  if (!containerRef.value)
    return
  nextTick(() => {
    totalPages.value = Math.ceil(containerRef.value.scrollWidth / PAGE_WIDTH)
    currentPage.value = Math.round(containerRef.value.scrollLeft / PAGE_WIDTH)
  })
}
function calculateProgress() {
  nextTick(() => {
    if (totalPages.value && props.modelValue && (currentPage.value + 1) / totalPages.value !== props.modelValue) {
      emit('update:modelValue', (currentPage.value + 1) / totalPages.value)
      emit('change', (currentPage.value + 1) / totalPages.value)
    }
  })
}
function calculateChapterProgress() {
  if (!containerRef.value)
    return

  const scrollWidth = containerRef.value.scrollWidth
  chapters.value.forEach((chapter) => {
    const el = document.getElementById(chapter.index)
    if (el) {
      chapter.progress = el.offsetLeft / scrollWidth
    }
  })
}

// const scrollTimeout: ReturnType<typeof setTimeout> | null = null
function handleScroll() {
  if (!containerRef.value)
    return

  nextTick(() => {
    calculatePages()
    calculateProgress()
  })

  // // 清除上一次的定时器
  // if (scrollTimeout)
  //   clearTimeout(scrollTimeout)

  // // 延迟执行对齐操作（用户停止滚动后）
  // scrollTimeout = setTimeout(() => {
  //   const page = Math.round(containerRef.value!.scrollLeft / PAGE_WIDTH)
  //   //
  //   containerRef.value!.scrollTo({
  //     left: page * PAGE_WIDTH,
  //     behavior: 'auto',
  //   })
  // }, 200) // 100ms 不再滚动就自动对齐
}

function jumpToProgress(progress: number) {
  nextTick(() => {
    const page = Math.round(progress * totalPages.value)
    scrollToPage(page)
  })
}

function jumpToPage(page: number) {
  page = Math.max(Math.min(page, totalPages.value - 1), 0)
  scrollToPage(page)
}

function prevPage() {
  if (!containerRef.value)
    return
  const page = Math.max(currentPage.value - 1, 0)
  const el = containerRef.value

  el.scrollLeft = page * PAGE_WIDTH
}

function nextPage() {
  if (!containerRef.value)
    return
  const page = Math.min(currentPage.value + 1, totalPages.value - 1)
  containerRef.value.scrollLeft = page * PAGE_WIDTH
}
watch(() => props.text, () => {
  chapters.value = splitChapters(props.text)
  nextTick(() => {
    calculatePages()
    updateScrollToProgress(props.modelValue ?? 0)
    calculateChapterProgress()
  })
})

watch(config, () => {
  nextTick(() => {
    updateScrollToProgress(props.modelValue ?? 0)
    calculatePages()
    calculateChapterProgress()
  })
}, {
  deep: true,
})

defineExpose({ nextPage, prevPage, jumpToProgress, jumpToPage, chapters, currentPage, totalPages, dom: containerRef })
</script>

<template>
  <div
    v-show="props.text"
    ref="containerRef"
    class="novel-reader pb-20"
    :style="contentStyle"
    @scroll.passive="handleScroll"
  >
    <div
      v-for="(chapter) in chapters"
      :id="chapter.index"
      :key="chapter.index"
      class="chapter"
    >
      <div
        class="chapter-name"
        v-text="chapter.name"
      />
      <p
        v-for="item in chapter.content"
        :key="item"
        v-text="item"
      />
    </div>
    <div class="finish-message">
      读完了
    </div>
  </div>
  <div class="progress-indicator">
    {{ currentPage + 1 }} / {{ totalPages }}
  </div>
</template>

<style scoped>
.novel-reader {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  /* scroll-behavior: smooth; */
  pointer-events: none;
}

.content {
  height: 100%;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
}

.chapter {
  flex-shrink: 0;
  width: 100vw;
  padding: 16px;
  /* scroll-snap-align: start;
  scroll-snap-type: x mandatory; */
  box-sizing: border-box;
}

.chapter-name {
  display: inline-block;
  font-weight: bold;
  margin-top: 20px;
  width: 100%;
  height: inherit;
}

p {
  text-indent: 2em;
  white-space: pre-wrap;
  word-break: break-word;
  opacity: 0.8;
}

.finish-message {
  margin-top: 30px;
  text-align: center;
  color: #999;
  break-after: column;
}

.progress-indicator {
  position: fixed;
  right: 10px;
  bottom: 10px;
  font-size: 14px;
  color: #666;
}
</style>
