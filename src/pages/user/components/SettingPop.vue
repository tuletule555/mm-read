<script setup lang="ts">
// import { showToast } from 'vant'
import useUserStore from '@/stores/modules/user'
import useAppStore from '@/stores/modules/app'
import { editUser } from '@/api/user'

const show = ref<boolean>(false)
const userStore = useUserStore()
const _isDark = ref<boolean>(isDark.value)
const route = useRoute()
const formData = ref()
function onOpen() {
  formData.value = {
    gap: 16,
    fontSize: 20,
    lineHeight: 28,
    // turnPageConfig: 1, // 1左右,2上下
    transition: true,
    direction: 'horizontal',
    ...JSON.parse(userStore.userInfo?.read_configs as string || '{}'),
  }
  show.value = true
}
function onClose() {
  show.value = false
}

async function onSubmit() {
  try {
    const data = {
      read_configs: JSON.stringify(formData.value),
    }
    await editUser(data)
    userStore.setUserInfo({ ...userStore.userInfo, ...data })
    toggle()
    onClose()
  }
  catch (e) {
    console.error(e)
  }
}

const appStore = useAppStore()
function toggle() {
  toggleDark()
  appStore.switchMode(isDark.value ? 'dark' : 'light')
  route.meta.themeColor = isDark.value ? '#222222' : '#f7f8fa'
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
        <NavBar title="修改设置" :back="onClose" />
        <van-form class="mt20 h-0 flex-1">
          <van-cell-group inset>
            <van-field name="fontSize" label="字体大小" input-align="right">
              <template #input>
                <van-stepper v-model="formData.fontSize" min="10" max="30" />
              </template>
            </van-field>
            <van-field name="lineHeight" label="行高" input-align="right">
              <template #input>
                <van-stepper v-model="formData.lineHeight" min="10" max="40" />
              </template>
            </van-field>
            <van-field name="fontSize" label="翻页动效" input-align="right">
              <template #input>
                <van-switch v-model="formData.transition" />
              </template>
            </van-field>
            <van-field name="dark" label="暗黑模式" input-align="right">
              <template #input>
                <van-switch v-model="_isDark" />
              </template>
            </van-field>
          </van-cell-group>
        </van-form>
        <div class="pb-30 pl-24 pr-24 pt-60">
          <van-button class="b-rd-8" type="primary" round block @click="onSubmit">
            保存
          </van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<style scoped lang="scss">
</style>
