<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import Book from './components/Book.vue'
import BottomPop from './components/BottomPop.vue'
import TopPop from './components/TopPop.vue'
import { getBook, updateBook } from '@/api/book'
import http from '@/utils/request'

// 页面定义
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
const book_id = ref<string>(route.query.id as string)
const book = ref<Record<string, any>>({ bookmark: [] })
const content = ref('')
const loading = ref(false)

const wrapperRef = ref<HTMLElement | null>(null)
const bookRef = ref()
const topPopRef = ref()
const bottomPopRef = ref()

// 手势位置
const startX = ref(0)
const startY = ref(0)
const endX = ref(0)
const endY = ref(0)

// 滑动动画状态
const isSlidingDown = ref(false)

// 获取内容（示例用空）
async function getData() {
  loading.value = true
  try {
    const res = await getBook(book_id.value) as any
    const storageBookInfo = JSON.parse(localStorage.getItem(`MM_READ_BOOK_${book_id.value}`) || '{}')
    let progress = 0
    if (storageBookInfo?.update_time && dayjs(storageBookInfo?.update_time) > dayjs(res.data?.update_time)) {
      progress = storageBookInfo.progress
    }
    else {
      progress = res.data?.progress
    }
    book.value = { ...res.data, bookmark: JSON.parse(res.data.bookmark as string || '[]'), progress }
    const res2 = await http.get(book.value?.book_id?.url, { responseType: 'blob' }) as Blob
    content.value = (await res2.text())
  }
  catch (error) {
    console.error(error)
  }
  finally {
    loading.value = false
  }
}

async function onUpdateBook() {
  // console.log('update', book.value.progress)
  nextTick(() => {
    localStorage.setItem(`MM_READ_BOOK_${book_id.value}`, JSON.stringify({ progress: book.value.progress, update_time: dayjs().format('YYYY-MM-DD HH:mm:ss') }))

    updateBook(book.value.id, { id: book.value.id, progress: book.value.progress, bookmark: JSON.stringify(book.value.bookmark) })
  })
}

// 手势事件
const showPop = ref<boolean>(false)
function openPop() {
  showPop.value = true
  bottomPopRef.value.onOpen()
  topPopRef.value.onOpen()
}
function closePop() {
  showPop.value = false
  bottomPopRef.value.onClose()
  topPopRef.value.onClose()
}

function onTouchStart(e: TouchEvent) {
  const touch = e.touches[0]
  startX.value = touch.clientX
  startY.value = touch.clientY
}

function onTouchEnd(e: TouchEvent) {
  if (showPop.value) {
    if ((e.target as any).className === 'book-wrapper') {
      closePop()
    }
    return
  }
  const touch = e.changedTouches[0]
  endX.value = touch.clientX
  endY.value = touch.clientY

  const deltaX = endX.value - startX.value
  const deltaY = endY.value - startY.value
  const absX = Math.abs(deltaX)
  const absY = Math.abs(deltaY)

  if (absX > absY && absX > 20) {
    // 左右滑动
    if (deltaX < 0) {
      bookRef.value?.nextPage()
    }
    else {
      bookRef.value?.prevPage()
    }
  }
  else if (absX < 10 && absY < 10) {
    onClick(e)
  }
  else if (absY > absX && deltaY > 20) {
    // 下滑
    handleBookMark()
  }
}

function onTouchMove(e: TouchEvent) {
  // 可选拦截默认行为
  if (showPop.value) {

  }
}

function onTouchCancel(e: TouchEvent) {
  // 可选处理
  if (showPop.value) {

  }
  startX.value = 0
  startY.value = 0
  endX.value = 0
  endY.value = 0
}

// 点击触发逻辑
function onClick(e: TouchEvent) {
  if (showPop.value) {
    closePop()
    return
  }
  const touch = e.changedTouches[0]
  const clientX = touch.clientX
  const screenWidth = wrapperRef.value.clientWidth
  const left = screenWidth / 3
  const right = (screenWidth / 3) * 2

  if (clientX < left) {
    bookRef.value?.prevPage()
  }
  else if (clientX > right) {
    bookRef.value?.nextPage()
  }
  else {
    openPop()
  }
}

// 下滑动画 + 添加书签
const isCurrentMark = computed(() => {
  return book.value?.bookmark?.some((item) => {
    if (item.progress >= (bookRef.value?.currentPage + 1) / bookRef.value?.totalPages && item.progress < (bookRef.value?.currentPage + 2) / bookRef.value?.totalPages) {
      return true
    }
    else {
      return false
    }
  })
})
function handleBookMark() {
  isSlidingDown.value = true
  setTimeout(() => {
    isSlidingDown.value = false
  }, 400)
  if (isCurrentMark.value) {
    const index = book.value?.bookmark?.findIndex((item) => {
      if (item.progress >= (bookRef.value?.currentPage + 1) / bookRef.value?.totalPages && item.progress < (bookRef.value?.currentPage + 2) / bookRef.value?.totalPages) {
        return true
      }
      else {
        return false
      }
    })
    book.value.bookmark.splice(index, 1)
  }
  else {
    book.value.bookmark.push({ progress: (bookRef.value?.currentPage + 1) / bookRef.value?.totalPages, title: '' })
  }
  onUpdateBook()
}

function onProgressChange(v) {
  bookRef.value.jumpToProgress(v)
}

function onPageChange(v) {
  bookRef.value.jumpToPage(v)
}

// 生命周期
onMounted(() => {
  getData()
  window.addEventListener('touchstart', onTouchStart, { passive: false })
  window.addEventListener('touchend', onTouchEnd, { passive: false })
  window.addEventListener('touchmove', onTouchMove, { passive: false })
  window.addEventListener('touchcancel', onTouchCancel, { passive: false })
})

onBeforeUnmount(() => {
  window.removeEventListener('touchstart', onTouchStart)
  window.removeEventListener('touchend', onTouchEnd)
  window.removeEventListener('touchmove', onTouchMove)
  window.removeEventListener('touchcancel', onTouchCancel)
})
</script>

<template>
  <div>
    <div
      v-if="loading"
      class="loader-overlay"
    >
      <div class="loader-spinner" />
      <span class="loader-text">加载中...</span>
    </div>
    <transition name="bookmark-fade">
      <div
        v-if="isCurrentMark"
        class="bookmark-indicator"
      >
        <!-- SVG书签图标 -->
        <svg
          class="bookmark-indicator"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 2C4.89543 2 4 2.89543 4 4V21C4 21.5523 4.44772 22 5 22C5.27614 22 5.52678 21.8946 5.70711 21.7071L12 15.4142L18.2929 21.7071C18.6834 22.0976 19.3166 22.0976 19.7071 21.7071C19.8946 21.5268 20 21.2761 20 21V4C20 2.89543 19.1046 2 18 2H6Z" />
        </svg>
      </div>
    </transition>
    <div
      v-show="!loading" ref="wrapperRef"
      class="book-wrapper"
      :class="{ 'slide-down': isSlidingDown }"
    >
      <Book
        v-show="!loading"
        ref="bookRef"
        v-model="book.progress"
        :text="content"
        @change="onUpdateBook"
      />
    </div>

    <TopPop
      ref="topPopRef"
      :book="book"
      :is-current-mark="isCurrentMark"
    />
    <BottomPop
      ref="bottomPopRef"
      :current="bookRef?.currentPage"
      :total="bookRef?.totalPages"
      :book="book"
      :chapters="bookRef?.chapters"
      :content-ref="bookRef?.dom"
      @progress-change="onProgressChange"
      @page-change="onPageChange"
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
  box-sizing: border-box;
  transition: transform 0.4s ease;
}

.book-wrapper.slide-down {
  transform: translateY(70px);
}

.loader-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  // pointer-events: none;
}

.loader-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: var(--van-primary-color);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.loader-text {
  margin-top: 8px;
  font-size: 14px;
  color: #666;
  animation: fadeIn 1.6s ease-in-out infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  0%,
  100% {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
  }
}

.bookmark-indicator {
  position: fixed;
  top: 0;
  right: 12px;
  z-index: 10;
  width: 28px;
  height: 28px;
  color: var(--van-primary-color);
  background-color: rgba(255, 255, 255, 0.7);
  padding: 4px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  user-select: none;
  pointer-events: none;
}

.bookmark-fade-enter-active,
.bookmark-fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.bookmark-fade-enter-from,
.bookmark-fade-leave-to {
  // opacity: 0;
  transform: translateY(-30px);
}

.bookmark-fade-enter-to,
.bookmark-fade-leave-from {
  // opacity: 1;
  transform: translateY(0);
}
</style>
