import type { PageResult } from '@/api/typing'
import http from '@/utils/request'

export function useData(params: {
  getData?: (params?: any, options?: any) => Promise<any>
  url?: string
  pageSize?: number
  firstPage?: number
  searchParams?: Record<string, any>
}) {
  const list = ref<any[]>([])
  const firstPage = ref<number>(params.firstPage !== undefined ? params.firstPage : 1)
  const page = ref<number>(firstPage.value - 1)
  const pageSize = ref<number>(params.pageSize || 10)
  const total = ref<number>(0)
  const finished = ref<boolean>(false)
  const loading = ref<boolean>(false)
  const refreshing = ref<boolean>(false)
  const searchParams = ref<Record<string, any>>(params.searchParams || {})
  const errorCount = ref<number>(0)
  const getData = async () => {
    try {
      const allParams = { ...searchParams.value, page: page.value, pageSize: pageSize.value }
      let res
      loading.value = true
      if (params.getData) {
        res = await params.getData(allParams)
      }
      else if (params.url) {
        res = await http.get<PageResult<any[]>>(params.url, { params: allParams })
      }
      list.value = (res.page || allParams.page) === firstPage.value ? (res.data?.list ?? []) : [...list.value, ...(res.data?.list ?? [])]
      total.value = res.data?.total
      finished.value = total.value <= page.value * pageSize.value

      loading.value = false
      refreshing.value = false
    }
    catch (e) {
      console.error(e)
      if (errorCount.value && errorCount.value > 5) {
        finished.value = true
      }
      else {
        errorCount.value++
      }
      loading.value = false
    }
  }
  const refresh = async () => {
    page.value = firstPage.value
    list.value = []
    finished.value = false
    refreshing.value = false
    await getData()
  }
  const load = () => {
    if (finished.value)
      return
    page.value++
    getData()
  }

  return { list, page, pageSize, total, loading, finished, refreshing, refresh, load, searchParams }
}
