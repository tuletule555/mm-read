<script setup lang="ts">
import type { ShareDto } from '@/api/share/interface'
import { getShare } from '@/api/share'

const route = useRoute()
definePage({
  name: 'share.detail',
  meta: {
    title: '分享详情',
    showTabbar: false,
  },
})

const formData = ref<ShareDto>({
  title: '',
  content: '',
  public: 1,
})

async function getData() {
  if (!route.query.id)
    return
  try {
    const res = await getShare(route.query.id as string)
    formData.value = { ...res.data, book_id: res.data?.book?.id }
  }
  catch (error) {
    console.error(error)
  }
}
onMounted(() => {
  getData()
})
</script>

<template>
  <div class="min-h-full flex flex-col pt16">
    <div class="p16 font-size-18 font-bold">
      {{ formData.title }}
      <div v-if="formData.book?.id" class="mt8 font-size-14 color-gray-8">
        关联书籍：{{ formData.book?.name }}
      </div>
    </div>
    <van-divider />
    <div class="p16 font-size-14">
      {{ formData.content }}
    </div>
  </div>
</template>
