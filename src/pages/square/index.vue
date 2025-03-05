<script setup lang="ts">
import router from '@/router'

definePage({
  name: 'square',
  meta: {
    title: '广场',
    showTabbar: true,
  },
})

interface Tab {
  value: string
  title: string
}

const tabList: Tab[] = [
  { value: '1', title: '壁纸' },
  { value: '2', title: '头像' },
]
const activeTab = ref<string>()

function toAddPage() {
  router.push({ name: 'image.add' })
}
</script>

<template>
  <div>
    <van-tabs v-model:active="activeTab">
      <van-tab v-for="tab in tabList" :key="tab.value" :title="tab.title" />
    </van-tabs>
    <van-button
      type="primary" @click="toAddPage
      "
    >
      我来上传
    </van-button>
  </div>
</template>
