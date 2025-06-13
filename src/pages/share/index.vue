<script setup lang="ts">
// import router from '@/router'
import { getShares } from '@/api/share'

definePage({
  name: 'share',
  meta: {
    title: '分享',
    showTabbar: true,
  },
})

const router = useRouter()

// interface Tab {
//   value: string
//   title: string
// }

// const tabList: Tab[] = [
//   { value: '1', title: '壁纸' },
//   { value: '2', title: '头像' },
// ]
// const activeTab = ref<string>()

const boxRef = ref()
const offset = ref<any>({ y: 600 })
onMounted(() => {
  offset.value.y = boxRef.value?.offsetHeight - 24 - 48
})
function toAdd() {
  router.push({ name: 'share.add' })
}
function toDetail(item: any) {
  router.push({ name: 'share.detail', query: { id: item.id } })
}
</script>

<template>
  <div ref="boxRef" class="h-full">
    <DataList search pull-refresh :api="getShares">
      <template #default="{ item }">
        <div class="p16" @click="toDetail(item)">
          <div class="font-size-14">
            {{ item.title }}
          </div>
          <div v-if="item.book?.id" class="mt8 font-size-12 color-gray-8">
            关联书籍：{{ item.book?.name }}
          </div>
        </div>
      </template>
    </DataList>
    <van-floating-bubble v-model:offset="offset" icon="plus" @click="toAdd" />
  </div>
</template>
