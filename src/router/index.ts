import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import type { EnhancedRouteLocation } from './types'
import useRouteTransitionNameStore from '@/stores/modules/routeTransitionName'
import useRouteCacheStore from '@/stores/modules/routeCache'

NProgress.configure({ showSpinner: true, parent: '#app' })

const router = createRouter({
  // history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to: EnhancedRouteLocation, from, next) => {
  NProgress.start()

  const routeCacheStore = useRouteCacheStore()
  const routeTransitionNameStore = useRouteTransitionNameStore()

  // Route cache
  routeCacheStore.addRoute(to)

  if (to.meta.level > from.meta.level)
    routeTransitionNameStore.setName('slide-fadein-left')

  else if (to.meta.level < from.meta.level)
    routeTransitionNameStore.setName('slide-fadein-right')

  else
    routeTransitionNameStore.setName('absolute-layout')

  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
