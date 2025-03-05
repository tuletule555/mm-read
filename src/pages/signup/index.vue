<script setup lang="ts">
import type { SignupInfo } from '@/api/user/interface'
import { login, signup } from '@/api/user/index'
import useUserStore from '@/stores/modules/user'

const userStore = useUserStore()

definePage({
  name: 'signup',
  meta: {
    level: 2,
    title: '注册',
    i18n: 'menus.login',
  },
})
const router = useRouter()
const route = useRoute()

interface Info extends SignupInfo {
  password2: string
}
const formData = ref<Info>({
  password: '',
  password2: '',
  username: '',
  phone: '',
  inviter: route.query.inviter as string,
})
function validatePhone(val) {
  if (val.length !== 11) {
    return '请填写正确的手机号'
  }
  else {
    return true
  }
}
function validatePassword(val) {
  if (val.length < 6) {
    return '密码需由6-20位数字、字母、特殊字符组成'
  }
  else {
    return true
  }
}
function validateConfirmPassword() {
  if (formData.value.password !== formData.value.password2) {
    return '两次密码不一致'
  }
  else {
    return true
  }
}

async function onSubmit() {
  try {
    const { username, phone, password, inviter } = formData.value
    await signup({ username, phone, password, inviter })
    const res = await login({ username, password })
    const { access_token, user } = res.data
    userStore.setUserInfo(user)
    userStore.setToken(access_token)
    router.replace({ name: 'book.list' })
  }
  catch (e) {
    // TODO handle the exception
    console.error(e)
  }
}

onMounted(() => {
})
</script>

<template>
  <div class="h-full w-full flex items-center justify-center">
    <van-form class="login-form mb80 p20" @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="formData.username"
          autocomplete="off"
          name="账号"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
          v-model="formData.phone"
          autocomplete="off"
          name="手机号"
          label="手机号"
          type="tel"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }, { validator: validatePhone }]"
        />
        <!-- <van-cell-group>
          <van-field
            v-model="formData.phone"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <template #button>
              <van-button size="small" type="primary">
                发送验证码
              </van-button>
            </template>
          </van-field>
        </van-cell-group> -->
        <van-field
          v-model="formData.password"
          autocomplete="new-password"
          type="password"
          name="设置密码"
          label="设置密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }, { validator: validatePassword }]"
        />
        <van-field
          v-model="formData.password2"
          autocomplete="new-password"
          type="password"
          name="确认密码"
          label="确认密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }, { validator: validateConfirmPassword }]"
        />
      </van-cell-group>
      <div class="mt20 flex pl20 pr20">
        <van-button round block type="primary" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
    <canvas id="canvas" />
  </div>
</template>

<style scoped lang="scss">
#canvas {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  z-index: -1;
}
.login-form {
  :deep(.van-cell.van-field),
  :deep(.van-cell-group) {
    background-color: rgba(221, 221, 221, 0.2);
  }
}
</style>
