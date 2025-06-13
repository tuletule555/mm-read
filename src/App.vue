<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useUserStore from '@/stores/modules/user'
import useAppStore from '@/stores/modules/app'
import useRouteCache from '@/stores/modules/routeCache'
// import useRouteTransitionNameStore from '@/stores/modules/routeTransitionName'
import useAutoThemeSwitcher from '@/hooks/useAutoThemeSwitcher'
import { getUserInfo } from '@/api/user/index'

useHead({
  title: 'MM-Read',
  meta: [
    {
      name: 'description',
      content: '',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? 'rgb(28, 28, 30)' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/mm-read.png' : '/mm-read.png',
    },
  ],
})

const appStore = useAppStore()
const { mode, themeVars } = storeToRefs(appStore)

// const routeTransitionNameStore = useRouteTransitionNameStore()
// const { routeTransitionName } = storeToRefs(routeTransitionNameStore)
const { initializeThemeSwitcher } = useAutoThemeSwitcher(appStore)

const keepAliveRouteNames = computed(() => {
  return useRouteCache().routeCaches as string[]
})

const userStore = useUserStore()
async function getUser() {
  try {
    const res = await getUserInfo()
    userStore.setUserInfo(res.data)
  }
  catch {
    // TODO handle the exception
  }
}

const route = useRoute()
watch([() => route.name, () => appStore.mode], () => {
  useHead({
    meta: [
      {
        name: 'theme-color',
        content: () => route.meta.themeColor as string || (isDark.value ? 'rgb(28, 28, 30)' : '#ffffff'),
      },
    ],
  })
})

function setHtmlBackgroundColor() {
  function getBgFromHref() {
    const url = window.location.href
    const match = url.match(/[?&]bg=([^&]*)/)
    return match ? decodeURIComponent(match[1]) : 'var(--van-gray-1)'
  }

  const bg = getBgFromHref()

  const html = document.documentElement
  html.style.setProperty('--background-color', bg)
}

onMounted(() => {
  initializeThemeSwitcher()
  getUser()
  setHtmlBackgroundColor()
})
</script>

<template>
  <VanConfigProvider
    class="flex flex-col container"
    :theme="mode"
    :theme-vars="themeVars"
    theme-vars-scope="global"
  >
    <NavBar />
    <div class="h-0 flex-1 overflow-auto">
      <router-view v-slot="{ Component, route }">
        <!-- <transition :name="routeTransitionName"> -->
        <keep-alive :include="keepAliveRouteNames">
          <component
            :is="Component"
            :key="route.name"
          />
        </keep-alive>

        <!-- </transition> -->
        <!-- <transition name="routeTransitionName" mode="out-in">
        <keep-alive :include="keepAliveRouteNames">
          <component :is="Component" :key="route.name" />
        </keep-alive>
      </transition> -->
      </router-view>
    </div>
    <TabBar />
  </VanConfigProvider>
</template>

<style scoped lang="scss">
.container {
  height: 100dvh;
  width: 100dvw;
  position: absolute;
  inset: 0;
  margin: auto;
}
</style>
