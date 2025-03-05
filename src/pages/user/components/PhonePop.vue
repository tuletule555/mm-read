<script setup lang="ts">
import { showToast } from 'vant'

const props = defineProps<{
  modelValue: string
}>()
const emits = defineEmits(['update:modelValue'])

const show = ref<boolean>(false)
const data = ref()
function onOpen() {
  data.value = props.modelValue
  show.value = true
}
function onClose() {
  show.value = false
}

async function onSubmit() {
  if (!data.value.trim()) {
    showToast('请输入手机号！')
    return
  }
  if (!/^1[3-9]\d{9}$/.test(data.value)) {
    showToast('请输入正确的手机号！')
    return
  }
  onClose()
  emits('update:modelValue', data.value)
}

defineExpose({
  onOpen,
  onClose,
})
</script>

<template>
  <div>
    <van-popup v-model:show="show" position="right" :style="{ 'height': '100%', 'width': '100%', 'margin': 0, 'max-width': '100%' }">
      <NavBar title="修改简介" />
      <van-form class="mt-8" @submit="onSubmit">
        <van-field
          v-model="data"
          placeholder="请输入简介"
          type="textarea"
          label-align="top"
          maxlength="500"
          show-word-limit
          autosize
        />
        <div class="pb-30 pl-24 pr-24 pt-60">
          <van-button class="b-rd-8" type="primary" block native-type="submit">
            确定
          </van-button>
        </div>
      </van-form>
    </van-popup>
  </div>
</template>

<style scoped lang="scss">
</style>
