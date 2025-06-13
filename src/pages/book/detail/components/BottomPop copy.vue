<script setup lang="ts">
import useAppStore from '@/stores/modules/app'

interface Props {
  current: number
  total: number
  configs: Record<string, any>
  book?: Record<string, any>
  chapters?: Array<any>
  contentRef?: any
}
const props = withDefaults(defineProps<Props>(), {
})

const emits = defineEmits(['currentChange', 'configsChange', 'chapterChange', 'searchResultChange'])

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
  value: 'search',
  label: '搜索',
  icon: 'i-uil:search',
}, {
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

const searchKey = ref<string>('')
const searchResult = ref<Array<any>>([])
function onSearch() {
  searchResult.value = searchDomContent(
    props.contentRef,
    searchKey.value,
  )
  console.log(searchResult.value, 'searchResult')
}

interface SearchResult {
  excerpt: string // 前后20字的上下文
  highlighted: string // 带高亮标记的文本
  pElement: HTMLParagraphElement // 匹配的 p 标签
  position: number // 在文本中的起始位置
}

/**
 * 高性能 DOM 搜索 (针对大量 P 标签优化)
 * @param rootDom 搜索根元素
 * @param searchKey 搜索关键词
 * @param maxResults 最大结果数 (防止过多结果导致性能问题)
 */
function searchDomContent(
  rootDom: HTMLElement,
  searchKey: string,
  maxResults: number = 500,
): SearchResult[] {
  if (!searchKey.trim())
    return []

  const results: SearchResult[] = []
  const regex = new RegExp(escapeRegExp(searchKey), 'gi')

  // 直接获取所有 P 标签，比 TreeWalker 更快
  const pElements = rootDom.getElementsByTagName('p')
  let resultCount = 0

  // 使用 for 循环比 forEach 更快
  for (let i = 0; i < pElements.length && resultCount < maxResults; i++) {
    const p = pElements[i]
    const text = p.textContent || ''
    let match: RegExpExecArray | null
    regex.lastIndex = 0 // 重置正则

    // eslint-disable-next-line no-cond-assign
    while ((match = regex.exec(text)) && resultCount < maxResults) {
      const start = match.index
      const end = start + match[0].length

      // 获取上下文 (优化字符串操作)
      const contextStart = Math.max(0, start - 8)
      const contextEnd = Math.min(text.length, end + 12)
      const excerpt = textBetween(text, contextStart, contextEnd)

      // 高亮处理 (优化替换操作)
      const highlighted = highlightMatch(excerpt, regex)

      results.push({
        excerpt,
        highlighted,
        pElement: p,
        position: start,
      })

      resultCount++

      // 跳过已匹配部分避免重复
      regex.lastIndex = end
    }
  }

  return results
}

// 优化字符串截取
function textBetween(text: string, start: number, end: number): string {
  return text.slice(start, end)
}

// 优化高亮处理
function highlightMatch(text: string, regex: RegExp): string {
  return text.replace(regex, m => `<span class="highlight">${m}</span>`)
}

// 转义正则特殊字符
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function onSearchResultChange(item: SearchResult) {
  emits('searchResultChange', item.pElement)
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
    position="bottom"
    :overlay="false"
    :lock-scroll="false"
  >
    <div style="padding-bottom: env(safe-area-inset-bottom);">
      <div
        v-if="activeSetting.value === 'chapter'"
        class="max-h-400 overflow-auto pl4 pr4"
      >
        <div class="mb-8 font-size-20" />
        <van-list class="max-h-200">
          <van-cell
            v-for="item in props.chapters || []"
            :key="item"
            :title="item.title"
            @click="onChapterChange(item)"
          />
        </van-list>
      </div>
      <div
        v-if="activeSetting.value === 'bookmark'"
        class="max-h-100% overflow-auto pl4 pr4"
      >
        <van-list class="max-h-200">
          <van-cell
            v-for="item in props.book?.bookmark || []"
            :key="item"
            :title="`进度：${Math.round(item.progress * 10000) / 100}%`"
            @click="onProgressChange(Math.round(item.progress * props.total))"
          />
        </van-list>
      </div>
      <div
        v-if="activeSetting.value === 'progress'"
        class="flex-center p30"
      >
        <van-slider
          v-model="_current"
          class="slider"
          :min="1"
          :max="props.total"
          @change="onProgressChange"
        >
          <template #button>
            <div class="h-18 min-w-24 flex-center b-rd-8 bg-white p4 font-size-12 color-gray-8 shadow-sm">
              {{ _current }}
            </div>
          </template>
        </van-slider>
      </div>
      <div
        v-if="activeSetting.value === 'font'"
        class="max-h-100% overflow-auto pl4 pr4 pt10"
      >
        <van-form>
          <van-field
            name="fontSize"
            label="字体大小"
            input-align="right"
          >
            <template #input>
              <van-stepper
                v-model="_configs.fontSize"
                min="10"
                max="30"
                @change="onConfigsChange"
              />
            </template>
          </van-field>
          <van-field
            name="lineHeight"
            label="行高"
            input-align="right"
          >
            <template #input>
              <van-stepper
                v-model="_configs.lineHeight"
                min="10"
                max="40"
                @change="onConfigsChange"
              />
            </template>
          </van-field>
        </van-form>
      </div>
      <div
        v-if="activeSetting.value === 'setting'"
        class="pl4 pr4 pt10"
      >
        <van-form>
          <van-field
            name="fontSize"
            label="字体大小"
            input-align="right"
          >
            <template #input>
              <van-stepper
                v-model="_configs.fontSize"
                min="10"
                max="30"
                @change="onConfigsChange"
              />
            </template>
          </van-field>
          <van-field
            name="lineHeight"
            label="行高"
            input-align="right"
          >
            <template #input>
              <van-stepper
                v-model="_configs.lineHeight"
                min="10"
                max="40"
                @change="onConfigsChange"
              />
            </template>
          </van-field>
          <van-field
            name="fontSize"
            label="翻页动效"
            input-align="right"
          >
            <template #input>
              <van-switch
                v-model="_configs.transition"
                @change="onConfigsChange"
              />
            </template>
          </van-field>
          <van-field
            name="dark"
            label="暗黑模式"
            input-align="right"
          >
            <template #input>
              <van-switch
                v-model="checked"
                @change="toggle()"
              />
            </template>
          </van-field>
        </van-form>
      </div>
      <div
        v-if="activeSetting.value === 'search'"
        class="flex flex-col pl4 pr4"
      >
        <div class="mb-8 font-size-20" />
        <van-search
          v-model="searchKey"
          placeholder="请输入搜索关键词"
          shape="round"
          @search="onSearch"
        />
        <van-list class="h-0 max-h-200 flex-1 overflow-auto">
          <van-cell
            v-for="item in searchResult"
            :key="item"
            :title="item.highlighted"
            @click="onSearchResultChange(item)"
          >
            <template #title>
              <span v-html="item.highlighted" />
            </template>
          </van-cell>
        </van-list>
      </div>
      <van-grid
        :border="true"
        direction="horizontal"
        class=""
        :column-num="5"
      >
        <van-grid-item
          v-for="item in list"
          :key="item.label"
          @click="onActiveSettingChange(item)"
        >
          <template #default>
            <i
              class="h-28 w-28"
              :class="item.icon"
            />
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

:deep(.highlight) {
  color: var(--van-primary-color);
}
</style>
