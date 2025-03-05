<script setup lang="ts">
import useUserStore from '@/stores/modules/user'
import { getTotal } from '@/api/book'

const userStore = useUserStore()
const userInfo = computed(() => {
  return userStore?.userInfo ?? {}
})

definePage({
  name: 'user',
  meta: {
    title: '个人中心',
    i18n: 'menus.profile',
    showTabbar: true,
  },
})

const router = useRouter()

function toUserInfo() {
  router.push({ name: 'userInfo' })
}

function toLogin() {
  router.replace({ name: 'login' })
}

const total = ref<Record<string, any>>({})
async function getTotalCount() {
  try {
    const res = await getTotal() as any
    total.value = res.data
  }
  catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getTotalCount()
})
</script>

<template>
  <div class="h-full flex flex-col p20">
    <div class="flex items-center">
      <div class="">
        <van-image
          width="5rem"
          height="5rem"
          fit="cover"
          round
          :src="userInfo?.head_img?.url"
        />
      </div>
      <div class="ml12 w-0 flex-1">
        <div class="font-size-18 font-bold">
          {{ userInfo.name }}
        </div>
        <div class="mt8 text-12 text-#ceba7e italic">
          VIP1
        </div>
      </div>
      <div class="flex-center color-gray-7" @click="toUserInfo">
        编辑<i class="i-uil:angle-right-b h-24 w-24" />
      </div>
    </div>
    <div class="mt20 w-full flex-1">
      <div class="card flex-center b-rd-8 p20">
        <div class="flex-center flex-1 flex-col font-size-14">
          <div class="flex-center color-gray-9">
            <i class="i-uil:book mr-4 h-16 w-16" />书籍
          </div>
          <div class="position-relative mt20">
            <span class="font-size-30 color-primary">{{ total.count }}</span><span class="position-absolute right-[-20px] color-gray-7">本</span>
          </div>
        </div>
        <van-divider vertical style="height: 60px;" />
        <div class="flex-center flex-1 flex-col font-size-14">
          <div class="flex-center color-gray-9">
            <i class="i-uil:swatchbook mr-4 h-16 w-16" />读完
          </div>
          <div class="position-relative mt20">
            <span class="font-size-30 color-primary">{{ total.finished }}</span><span class="position-absolute right-[-20px] color-gray-7">本</span>
          </div>
        </div>
      </div>
    </div>
    <van-button class="mt20" round block type="primary" @click="toLogin">
      退出登录
    </van-button>
  </div>
</template>
