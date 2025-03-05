import { defineStore } from 'pinia'
import type { ConfigProviderTheme } from 'vant'

export interface AppStore {
  switchMode: (val: ConfigProviderTheme) => void
}

const prefersDark
= window.matchMedia
&& window.matchMedia('(prefers-color-scheme: dark)').matches

const useAppStore = defineStore('app', () => {
  const theme = prefersDark ? 'dark' : 'light'
  const mode = ref<ConfigProviderTheme>(theme)
  const themeVars = ref({
    // primaryColor: '#0C819F',
    // primaryColor: 'linear-gradient( 90deg, #E74C3C 0%, #0C819F 100%)',
    primaryColor: '#83b5ad',
  })

  const switchMode = (val: ConfigProviderTheme) => {
    mode.value = val
  }

  return {
    mode,
    switchMode,
    themeVars,
  }
}, {
  persist: true,
})

export default useAppStore
