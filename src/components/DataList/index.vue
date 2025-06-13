<script setup lang="ts">
import { useData } from '@/hooks/useData'

const props = withDefaults(defineProps<{
  api?: (params?: any, options?: any) => Promise<any>
  url?: string
  pageSize?: number
  firstPage?: number
  searchParams?: Record<string, any>
  pullRefresh?: boolean // 下拉刷新
  search?: boolean // 搜索
}>(), {
  pageSize: 10,
  firstPage: 1,
  pullRefresh: true,
})
const { list, page, pageSize, total, loading, finished, refreshing, refresh, load, searchParams } = useData({
  getData: props.api,
  url: props.url,
  pageSize: props.pageSize,
  firstPage: props.firstPage,
  searchParams: props.searchParams,
})
defineExpose({
  list,
  page,
  pageSize,
  total,
  loading,
  finished,
  refreshing,
  refresh,
  load,
  searchParams,
})
</script>

<template>
  <component :is="props.pullRefresh ? 'van-pull-refresh' : 'div'" v-model="refreshing" class="h-full flex flex-col" @refresh="refresh">
    <van-search v-if="props.search" v-model="searchParams.searchKey" @search="refresh" />
    <van-pull-refresh v-model="refreshing" class="sxa-list h-0 flex-1" @refresh="refresh">
      <van-list
        v-model:loading="loading"
        class="wh-full"
        :finished="finished"
        finished-text="没有更多了"
        @load="load"
      >
        <div
          v-for="item in list"
          :key="item.id"
        >
          <slot :item="item">
            <span>{{ item?.name }}</span>
          </slot>
        </div>
      </van-list>
    </van-pull-refresh>
  </component>
</template>

<style lang="scss" scoped>
</style>
