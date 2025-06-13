<script setup lang="ts">
import BottomPop from './components/BottomPop.vue'
import { createBook, getBooks } from '@/api/book'
import type { BookDto } from '@/api/book/interface'
import { uploadBook } from '@/api/file'
import { getDictByType } from '@/api/dict'
import { useData } from '@/hooks/useData'

definePage({
  name: 'book.list',
  meta: {
    title: '书柜',
    showTabbar: true,
  },
})

// const books = ref<BookDto[]>([])
const optionProgress = ref<any[]>([])
async function getOptionProgress() {
  try {
    const res = await getDictByType('book_progress')
    optionProgress.value = [{ text: '全部', value: '' }, ...res.data?.map((item) => {
      return {
        text: item.label,
        value: item.value,
      }
    })]
  }
  catch (error) {
    console.error(error)
  }
}
const optionType = ref<any[]>([])
async function getOptionType() {
  try {
    const res = await getDictByType('book_type')
    optionType.value = [{ text: '全部', value: '' }, ...res.data?.map((item) => {
      return {
        text: item.label,
        value: item.value,
      }
    })]
  }
  catch (error) {
    console.error(error)
  }
}

// const searchParam = ref<Record<string, any>>({})
/**
 * 异步获取书籍数据
 *
 * 该函数调用 `getBooks` 方法获取书籍列表，并将结果存储在 `books` 变量中。
 * 如果请求失败，将捕获错误但不进行处理。
 */
// async function getData() {
//   try {
//     const res = await getBooks(searchParam.value)
//     books.value = res.data.items
//   }
//   catch (error) {
//   }
// }
const { list, loading, finished, load, refresh, searchParams } = useData({
  getData: getBooks,
  pageSize: 60,
  firstPage: 1,
  searchParams: {
  },
})

async function onRefresh() {
  onCancelSelect()
  refresh()
}

const router = useRouter()
const isSelect = ref<boolean>(false)
const selectedBook = ref<BookDto[]>([])
const bottomPopRef = ref()
function toDetail(book: BookDto) {
  if (isSelect.value) {
    onSelectBook(book)
    return
  }
  router.push({ name: 'book.detail', query: { id: book.id } })
}

function onStartSelectBook(book: BookDto) {
  bottomPopRef.value.onOpen()
  isSelect.value = true
  selectedBook.value = [book]
}
function onSelectBook(book: BookDto) {
  if (isBookSelected(book)) {
    selectedBook.value = selectedBook.value.filter((item: BookDto) => book.id !== item.id)
  }
  else {
    selectedBook.value.push(book)
  }
}
function onCancelSelect() {
  bottomPopRef.value.onClose()
  isSelect.value = false
  selectedBook.value = []
}

function isBookSelected(book: BookDto) {
  return selectedBook.value.find((item: BookDto) => book.id === item.id)
}

async function handleUploadSuccess(file) {
  try {
    await createBook({
      name: file.name.slice(0, file.name.lastIndexOf('.')),
      book_id: file.id,
    })
    refresh()
  }
  catch (e) {
    // TODO handle the exception
    console.error(e)
  }
}

onMounted(async () => {
  getOptionType()
  getOptionProgress()
})
</script>

<template>
  <div class="min-h-full flex flex-col">
    <NavBar :placeholder="false">
      <template #right>
        <template v-if="!isSelect">
          <Upload
            class="head-image"
            :preview-image="false"
            reupload
            :api="uploadBook"
            :deletable="false"
            accept="text/plain"
            @success="handleUploadSuccess"
          >
            <template #default>
              添加
            </template>
          </Upload>
        </template>
        <template v-else>
          <div @click="onCancelSelect">
            取消
          </div>
        </template>
      </template>
    </NavBar>
    <van-dropdown-menu class="z-100">
      <van-dropdown-item v-model="searchParams.type" :options="optionType" title="书籍分类" @change="onRefresh" />
      <van-dropdown-item v-model="searchParams.progress" :options="optionProgress" title="阅读进度" @change="onRefresh" />
    </van-dropdown-menu>
    <van-list
      v-model:loading="loading"
      class="h-0 flex-1 overflow-auto pb16 pl16 pt16"
      :finished="finished"
      finished-text="没有更多了"
      @load="load"
    >
      <van-row
        :gutter="[0, 20]"
        wrap
      >
        <van-col
          v-for="book in list"
          :key="book.id"
          v-longpress="() => { onStartSelectBook(book) }"
          span="8"
          class="pr16"
          @click="toDetail(book)"
        >
          <div
            class="book-img h-140 w-87 w-full b-rd-4 bg-white p8 font-size-14 color-gray-8 shadow-md"
            :class="{ check: isBookSelected(book) && isSelect }"
          >
            {{ book.name }}
            <div
              v-if="isSelect"
              class="checkbox"
            >
              <SvgIcon
                width="100%"
                height="100%"
                class="color-primary"
                :name="isBookSelected(book) ? 'icon-check-active' : 'icon-check'"
              />
            </div>
          </div>
          <div class="pt-8 font-size-12 color-gray-7">
            {{ book.progress === 0 ? '未开始' : book.progress === 1 ? '已完成' : `进度：${Math.floor(book.progress * 10000) / 100}%` }}
          </div>
        </van-col>
        <!-- <van-col span="8" /> -->
      </van-row>
    </van-list>
    <BottomPop
      ref="bottomPopRef"
      :selected-book="selectedBook"
      :option-type="optionType"
      @callback="onRefresh"
    />
  </div>
</template>

<style lang="scss" scoped>
.head-image {
  .head-preview-cover {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :deep(.van-image) {
    border-radius: 50%;
    overflow: hidden;
  }
}

.checkbox {
  opacity: 0;
  transition: 0.3s;
}

.book-img {
  position: relative;
  user-select: none;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    z-index: 2;
    transition: 0.3s;
  }

  .checkbox {
    opacity: 0;
    transition: 0.3s;
    position: absolute;
    z-index: 3;
    bottom: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
  }

  &.check {
    &::after {
      background: rgba(0, 0, 0, 0.2);
    }

    .checkbox {
      opacity: 1;
    }
  }
}
</style>
