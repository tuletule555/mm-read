<script setup lang="ts">
import type { PickerColumn } from 'vant'
import useAppStore from '@/stores/modules/app'
import { languageColumns, locale } from '@/utils/i18n'

definePage({
  name: 'home',
  redirect: '/book/list',
  meta: {
    title: '主页',
    i18n: 'menus.home',
    showTabbar: true,
  },
})

const appStore = useAppStore()
const checked = ref<boolean>(isDark.value)

watch(
  () => isDark.value,
  (newMode) => {
    checked.value = newMode
  },
  { immediate: true },
)

function toggle() {
  toggleDark()
  appStore.switchMode(isDark.value ? 'dark' : 'light')
}

const { t } = useI18n()

const showLanguagePicker = ref(false)
const languageValues = ref<Array<string>>([locale.value])
const language = computed(() => languageColumns.find(l => l.value === locale.value).text)

function onLanguageConfirm(event: { selectedOptions: PickerColumn }) {
  locale.value = event.selectedOptions[0].value as string
  showLanguagePicker.value = false
}

const menuItems = computed(() => ([
  { title: t('menus.mockGuide'), route: 'mock' },
  { title: t('menus.echartsDemo'), route: 'charts' },
  { title: t('menus.unocssExample'), route: 'unocss' },
  { title: t('menus.persistPiniaState'), route: 'counter' },
  { title: t('menus.404Demo'), route: 'unknown' },
  { title: t('menus.keepAlive'), route: 'keepalive' },
]))
</script>

<template>
  <div class="pt-16">
    <VanCellGroup inset>
      <VanCell center :title="t('menus.darkMode')">
        <template #right-icon>
          <VanSwitch v-model="checked" size="20px" aria-label="on/off Dark Mode" @click="toggle()" />
        </template>
      </VanCell>

      <VanCell
        is-link
        :title="t('menus.language')"
        :value="language"
        @click="showLanguagePicker = true"
      />

      <van-popup v-model:show="showLanguagePicker" position="bottom">
        <van-picker
          v-model="languageValues"
          :columns="languageColumns"
          @confirm="onLanguageConfirm"
          @cancel="showLanguagePicker = false"
        />
      </van-popup>

      <template v-for="item in menuItems" :key="item.route">
        <VanCell :title="item.title" :to="item.route" is-link />
      </template>
    </VanCellGroup>
  </div>
</template>
