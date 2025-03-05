<script setup lang="ts">
const { t } = useI18n()
const active = ref(0)
const route = useRoute()

const show = computed(() => {
  if (route.meta.showTabbar)
    return true
  return false
})
</script>

<template>
  <van-tabbar v-if="show" v-model="active" class="tabbar" placeholder route>
    <!-- <van-tabbar-item replace to="/square">
      {{ t('layouts.square') }}
      <template #icon>
        <div class="i-carbon:tropical-storm-tracks" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/">
      {{ t('layouts.workshop') }}
      <template #icon>
        <div class="i-carbon-assembly" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/photos">
      {{ t('layouts.photos') }}
      <template #icon>
        <div class="i-carbon:volume-block-storage" />
      </template>
    </van-tabbar-item> -->
    <van-tabbar-item replace to="/book/list">
      书柜
      <template #icon>
        <div class="i-carbon:volume-block-storage" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/user">
      {{ t('layouts.profile') }}
      <template #icon>
        <div class="i-carbon:user" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<style lang="scss" scoped>

</style>
