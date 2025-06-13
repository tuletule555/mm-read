<script setup lang="ts">
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
    <van-popup v-model:show="show" position="right" :style="{ 'height': '100%', 'width': '100%', 'margin': 0, 'max-width': '100%', 'background': 'var(--van-background)' }">
      <div class="min-h-full flex flex-col">
        <NavBar title="修改简介" :back="onClose" />
        <van-form class="mt20 h-0 flex-1">
          <van-cell-group inset>
            <van-field
              v-model="data"
              placeholder="请输入简介"
              type="textarea"
              label-align="top"
              maxlength="500"
              show-word-limit
              :rows="5"
              autosize
            />
          </van-cell-group>
        </van-form>
        <div class="pb-30 pl-24 pr-24 pt-60">
          <van-button class="b-rd-8" type="primary" round block @click="onSubmit">
            确定
          </van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<style scoped lang="scss">
</style>
