<script setup lang="ts">
const props = withDefaults(defineProps<{
  placeholder?: boolean
}>(), {
  placeholder: true,
})
const route = useRoute()
// const router = useRouter()

function onBack() {
  if (window.history.state.back)
    history.back()
}

const { t } = useI18n()

const title = computed(() => {
  if (!route.meta)
    return ''

  return route.meta.i18n ? t(route.meta.i18n) : (route.meta.title || '')
})

const show = computed(() => {
  if (route.meta.hideNavbar)
    return false
  return true
})
</script>

<template>
  <VanNavBar
    v-if="show"
    :title="title"
    :fixed="true"
    clickable
    :placeholder="props.placeholder"
    :left-arrow="true"
    v-bind="$attrs"
    @click-left="onBack"
  >
    <template #right>
      <slot name="right" />
    </template>
  </VanNavBar>
</template>
