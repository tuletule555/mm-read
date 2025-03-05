<script setup lang="ts">
import DescriptionPop from './components/DescriptionPop.vue'
import NamePop from './components/NamePop.vue'
import PhonePop from './components/PhonePop.vue'
import { editUser, getUserInfo } from '@/api/user'
import useUserStore from '@/stores/modules/user'
import type { User } from '@/api/user/interface'

const userStore = useUserStore()
const router = useRouter()

definePage({
  name: 'userInfo',
  meta: {
    title: '编辑资料',
    i18n: 'menus.profile',
    showTabbar: true,
  },
})

const formData = ref<User>({})

async function getUser() {
  try {
    const res = await getUserInfo()
    formData.value = res.data
  }
  catch (e) {
    // TODO handle the exception
    console.error(e)
  }
}

async function toSave() {
  try {
    const data = {
      ...formData.value,
      head_img: formData.value.head_img?.id,
    }
    await editUser(data)
    userStore.setUserInfo(formData.value)
    router.back()
  }
  catch (e) {
  // TODO handle the exception
    console.error(e)
  }
}

const descriptionPopRef = ref()
async function toChangeDescription() {
  descriptionPopRef.value.onOpen()
}
const namePopRef = ref()
async function toChangeName() {
  namePopRef.value.onOpen()
}
const phoneRef = ref()
async function toChangePhone() {
  phoneRef.value.onOpen()
}
onMounted(() => {
  getUser()
})
</script>

<template>
  <div class="flex flex-col">
    <div class="mt20 flex items-center justify-center">
      <Upload v-model="formData.head_img" class="head-image" :limit="1" :preview-image="true" reupload :deletable="false">
        <template #default>
          <van-image
            fit="cover"
            round
            :src="formData?.head_img?.url"
            width="5rem"
            height="5rem"
          />
        </template>
        <template #preview-cover>
          <div class="head-preview-cover">
            <van-icon name="photograph" size="2rem" />
          </div>
        </template>
      </Upload>
    </div>
    <div class="mt20 h-0 flex-1">
      <van-cell-group inset>
        <van-cell title="账号" :value="formData.username" />
        <van-cell title="昵称" :value="formData.name || '-'" is-link @click="toChangeName" />
        <van-cell title="手机号" :value="formData.phone || '-'" />
        <van-cell title="简介" :value="formData.description || '-'" is-link @click="toChangeDescription" />
      </van-cell-group>
    </div>
    <div class="p20">
      <van-button round block type="primary" @click="toSave">
        保存
      </van-button>
    </div>
    <DescriptionPop ref="descriptionPopRef" v-model="formData.description" />
    <NamePop ref="namePopRef" v-model="formData.name" />
    <PhonePop ref="phoneRef" v-model="formData.phone" />
  </div>
</template>

<style lang="scss" scoped>
.head-image {
  .head-preview-cover {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :deep(.van-image) {
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
