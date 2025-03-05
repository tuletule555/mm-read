<script setup lang="ts">
import { showToast } from 'vant'
import BottomPop from './components/BottomPop.vue'
import TopPop from './components/TopPop.vue'
import { getBook, updateBook } from '@/api/book'
import http from '@/utils/request'
import { editUser } from '@/api/user'
import useUserStore from '@/stores/modules/user'

definePage({
  name: 'book.detail',
  meta: {
    title: '阅读',
    showTabbar: false,
    hideNavbar: true,
    themeColor: isDark.value ? '#222222' : '#f7f8fa',
  },
})

const route = useRoute()
const userStore = useUserStore()
const configs = computed(() => {
  return {
    gap: 16,
    fontSize: 20,
    lineHeight: 28,
    // turnPageConfig: 1, // 1左右,2上下
    transition: true,
    direction: 'horizontal',
    ...JSON.parse(userStore.userInfo?.read_configs as string || '{}'),
  }
})

const book = ref()
const content = ref()
const chapters = ref([])
const wrapperRef = ref()
const contentRef = ref()
const endRef = ref()
const current = ref<number>(1)
const total = ref<number>(1)
const loading = ref<boolean>(true)
const diffX = ref(0)
const diffY = ref(0)

const translateX = computed(() => {
  const width = wrapperRef.value?.clientWidth - configs.value.gap
  return (current.value - 1) * width * -1 - diffX.value
})
const translateY = computed(() => {
  if (diffY.value < 0) {
    return Math.min((-1 * diffY.value), 50)
  }
  else {
    return 0
  }
})

const directionVerticalTranslate = ref(0)

const getStyles = computed(() => {
  const styles: any = {
    padding: `${configs.value.gap}px`,
    fontSize: `${configs.value.fontSize}px`,
    lineHeight: `${configs.value.lineHeight}px`,
  }
  if (configs.value.direction === 'horizontal') {
    styles.transform = `translate(${translateX.value}px,${translateY.value}px)`
    styles.columnGap = `${configs.value.gap}px`
    styles.columns = `calc(100svw - ${configs.value.gap * 2}px) 1`
  }
  else if (configs.value.direction === 'vertical') {
    styles.transform = `translateY(${directionVerticalTranslate.value}px)`
    // styles.columnGap = `${configs.value.gap}px`
    // styles.columns = `calc(100svw - ${configs.value.gap * 2}px) 1`
  }
  return styles
})

async function onConfigsChange(v) {
  const data = {
    read_configs: JSON.stringify(v),
  }
  await editUser(data)
  if (v.fontSize !== configs.value.fontSize || v.gap !== configs.value.gap || v.lineHeight !== configs.value.lineHeight) {
    book.value.progress = current.value / total.value
    initPage()
  }
  contentRef.value.style.transition = v.transition ? '0.4s ease' : 'none'
  userStore.setUserInfo({ ...userStore.userInfo, ...data })
}
function onCurrentChange(v: number) {
  current.value = v
}
function onChapterChange(item: any) {
  const width = wrapperRef.value?.clientWidth - configs.value.gap
  const offsetLeft = document.getElementById(item.id)?.offsetLeft
  current.value = Math.min(Math.max(1, Math.ceil(offsetLeft / width)), total.value)
}

function initPage() {
  nextTick(() => {
    const width = wrapperRef.value?.clientWidth - configs.value.gap
    total.value = Math.ceil(endRef.value?.offsetLeft / width)
    const progress = Number.parseFloat(localStorage.getItem(`book${route.query.id}`) || book.value.progress)
    current.value = Math.min(Math.max(1, Math.round(progress * total.value)), total.value)
    if (configs.value.transition) {
      setTimeout(() => {
        contentRef.value.style.transition = '0.4s ease'
      }, 400)
    }
  })
}
async function getData() {
  try {
    loading.value = true
    contentRef.value.style.transition = 'none'
    const res = await getBook(route.query.id as string)
    book.value = { ...res.data, bookmark: JSON.parse(res.data.bookmark as string || '[]') }
    const res2 = await http.get(book.value?.book_id?.url, { responseType: 'blob' }) as Blob
    chapters.value = []
    content.value = (await res2.text())
      .replace('<', '&lt;')
      .replace('>', '&gt;')
      .replace('script', '')
      .replace(/^(第\s*[一二三四五六七八九十百千万\d]+\s*[章回].*)$/gm, (match) => {
        const chapter = { title: match, id: `chapter${chapters.value.length}` }
        chapters.value.push(chapter)
        return `<div class="chapter" id="${chapter.id}">${match}</div>`
      })
      .split('\n')
      .map(line => `<p>${line.replace(/^\s*/g, '')}</p>`)
      .join('')
    loading.value = false
    initPage()
  }
  catch (error) {
    loading.value = false
    console.log(error)
  }
}

async function onUpdateBook() {
  nextTick(() => {
    updateBook(book.value.id, { id: book.value.id, progress: current.value / total.value, bookmark: JSON.stringify(book.value.bookmark) })
  })
}

function next(i) {
  const page = current.value + i
  if (page > total.value) {
    return showToast('到底啦！')
  }
  else if (page > 0) {
    current.value = page
  }
}

const isCurrentMark = computed(() => {
  return book.value?.bookmark?.some((item) => {
    if (item.progress >= current.value / total.value && item.progress < (current.value + 1) / total.value) {
      return true
    }
    else {
      return false
    }
  })
})
function onToggleMark() {
  if (isCurrentMark.value) {
    const index = book.value?.bookmark?.findIndex((item) => {
      if (item.progress >= current.value / total.value && item.progress < (current.value + 1) / total.value) {
        return true
      }
      else {
        return false
      }
    })
    book.value.bookmark.splice(index, 1)
  }
  else {
    book.value.bookmark.push({ progress: current.value / total.value, title: '' })
  }
  onUpdateBook()
}

const bottomPopRef = ref()
const topPopRef = ref()
const showPop = ref<boolean>(false)
let startX, endX, startY, endY
function onTouchStart(e) {
  if (showPop.value) {
    return
  }
  contentRef.value.style.transition = 'none'
  // 记录触摸开始的位置
  startX = e.touches[0].clientX
  startY = e.touches[0].clientY
}

function onTouchEnd(e) {
  if (showPop.value) {
    return
  }
  endX = e.changedTouches[0].clientX // 记录触摸结束的位置
  endY = e.changedTouches[0].clientY
  diffX.value = startX - endX // 计算水平滑动的距离
  diffY.value = startY - endY // 计算水平滑动的距离

  if (Math.abs(diffX.value) >= Math.abs(diffY.value) && Math.abs(diffX.value) > 30) { // 设定滑动的最小距离（阈值）
    next(diffX.value > 0 ? 1 : -1)
    contentRef.value.style.transition = '0.4s ease'
  }
  else if (Math.abs(diffX.value) < Math.abs(diffY.value) && diffY.value < -30) {
    onToggleMark()
    contentRef.value.style.transition = '0.4s ease'
  }
  else if (diffX.value - diffY.value > 2 || diffY.value - diffX.value > 2) {
    e.preventDefault()
    e.stopPropagation()
  }
  diffX.value = 0
  diffY.value = 0
  setTimeout(() => {
    contentRef.value.style.transition = configs.value.transition ? '0.4s ease' : 'none'
  }, 400)
}

function onTouchMove(e) {
  if (showPop.value) {
    return
  }
  endX = e.changedTouches[0].clientX // 记录触摸结束的位置
  endY = e.changedTouches[0].clientY
  if (diffX.value) {
    diffX.value = startX - endX // 计算水平滑动的距离
  }
  else if (diffY.value) {
    diffY.value = startY - endY // 计算水平滑动的距离
  }
  else {
    const _diffX = startX - endX // 计算水平滑动的距离
    const _diffY = startY - endY // 计算水平滑动的距离
    if (Math.abs(_diffX) >= Math.abs(_diffY)) {
      diffX.value = _diffX
    }
    else {
      diffY.value = _diffY
    }
  }
}

function onTouchCancel() {
  if (showPop.value) {
    return
  }
  contentRef.value.style.transition = configs.value.transition ? '0.4s ease' : 'none'
  diffX.value = 0
  diffY.value = 0
}

function onContentTouchEnd(e) {
  if (showPop.value) {
    showPop.value = false
    bottomPopRef.value.onClose()
    topPopRef.value.onClose()
    return
  }
  const clickX = e.clientX // 获取点击的X坐标
  const middle = wrapperRef.value.clientWidth / 2 // 页面中间的X坐标

  if (clickX < middle / 2) {
    next(-1)
  }
  else if (clickX > middle + middle / 2) {
    // 点击在页面的右侧
    next(1)
  }
  else {
    // 点击在页面的中间
    showPop.value = true
    bottomPopRef.value.onOpen()
    topPopRef.value.onOpen()
  }
}

function onUnload() {
  // // 提交数据，确保在页面关闭时发送
  // const success = navigator.sendBeacon(`/book/${book.value.id}`, JSON.stringify({ id: book.value.id, progress: current.value / total.value, bookmark: JSON.stringify(book.value.bookmark) }))
  // if (!success) {
  //   console.error('sendBeacon failed')
  //   // 这里可以添加备用方案，例如使用fetch API，但要注意不要阻塞页面卸载
  // }

  navigator.serviceWorker.ready.then((registration) => {
    registration.active.postMessage({ action: 'update', data: { id: book.value.id, progress: current.value / total.value }, token: userStore.token })
  })
}

onMounted(() => {
  getData()
  // 监听事件
  contentRef.value.addEventListener('click', onContentTouchEnd)
  window.addEventListener('touchstart', onTouchStart, { passive: false })
  window.addEventListener('touchend', onTouchEnd, { passive: false })
  window.addEventListener('touchmove', onTouchMove, { passive: false })
  window.addEventListener('touchcancel', onTouchCancel, { passive: false })
  window.addEventListener('beforeunload', onUnload)
  window.addEventListener('resize', initPage, false)
})

onBeforeUnmount(() => {
  onUpdateBook()

  // 移除事件监听器
  contentRef.value.removeEventListener('click', onContentTouchEnd)
  window.removeEventListener('touchstart', onTouchStart)
  window.removeEventListener('touchend', onTouchEnd)
  window.removeEventListener('touchmove', onTouchMove)
  window.removeEventListener('touchcancel', onTouchCancel)
  window.removeEventListener('beforeunload', onUnload)
  window.removeEventListener('resize', initPage, false)
})

watch(() => current.value, () => {
  localStorage.setItem(`book${route.query.id}`, `${current.value / total.value}`)
})

// 在主线程中注册 Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope)
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error)
    })
}
// function test() {
//   console.log('test')
//   navigator.serviceWorker.ready.then((registration) => {
//     registration.active.postMessage({ action: 'update', data: { id: book.value.id, progress: current.value / total.value }, token: userStore.token })
//   })
// }
</script>

<template>
  <div
    ref="wrapperRef"
    class="book-wrapper"
  >
    <div
      v-show="!loading"
      ref="contentRef"
      class="book"
      :style="getStyles"
    >
      <div v-html="content" />
      <div ref="endRef" class="book-end">
        读完啦！
      </div>
    </div>
    <div class="book-bottom flex items-center">
      <div class="flex-1 text-right font-size-12 color-gray-7">
        {{ current }}/{{ total }}
      </div>
    </div>
    <!-- <el-button @click="test">
      test
    </el-button> -->
    <TopPop
      ref="topPopRef" :current="current" :total="total" :configs="configs" :book="book" :is-current-mark="isCurrentMark" @current-change="onCurrentChange" @configs-change="onConfigsChange"
    />
    <BottomPop
      ref="bottomPopRef" :current="current" :total="total" :configs="configs" :book="book" :chapters="chapters" @current-change="onCurrentChange" @configs-change="onConfigsChange" @chapter-change="onChapterChange"
    />
  </div>
</template>

<style lang="scss" scoped>
.book-wrapper {
  height: 100%;
  width: 100svw;
  position: fixed;
  inset: 0;
  overflow: hidden;
  padding-bottom: 12px;
  box-sizing: border-box;
}

.book {
  white-space: pre-wrap;
  word-break: break-word;
  height: 100%;
  overflow: visible;
  transition: none;
  :deep(p) {
    text-indent: 2em;
    white-space: pre-wrap;
    word-break: break-word;
    opacity: 0.8;
  }
  :deep(.chapter) {
    display: inline-block;
    font-weight: bold;
    margin-top: 20px;
    width: 100%;
    height: inherit;
  }

  .book-end {
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.book-bottom {
  position: absolute;
  width: 100%;
  bottom: 12px;
  & > *:first-child {
    padding-left: 16px;
  }
  & > *:last-child {
    padding-right: 16px;
  }
}
</style>
