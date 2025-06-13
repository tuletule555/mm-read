<script setup lang="ts">
import type { LoginInfo } from '@/api/user/interface'
import { login } from '@/api/user/index'
import useUserStore from '@/stores/modules/user'

const userStore = useUserStore()

definePage({
  name: 'login',
  meta: {
    level: 2,
    title: '登录',
    i18n: 'menus.login',
  },
})
const router = useRouter()

const formData = ref<LoginInfo>({
  username: '',
  // phone: '',
  password: '',
})

async function onSubmit() {
  try {
    const res = await login(formData.value)
    const { access_token, user } = res.data
    userStore.setUserInfo(user)
    userStore.setToken(access_token)
    router.replace({ name: 'book.list' })
  }
  catch (e) {
    // TODO handle the exception
    // console.error(e)
  }
}
async function toSingup() {
  router.push({ name: 'signup' })
}

function useCanvas(dom, defaultOptions = {}) {
  const opt = {
    particleAmount: 10,
    defaultSpeed: 1,
    variantSpeed: 1,
    particleColor: 'rgba(32,245,245,0.1)',
    lineColor: 'rgba(32,245,245,0.1)',
    defaultRadius: 2,
    variantRadius: 2,
    minDistance: 120,
    ...defaultOptions,
  }
  const particle = []
  let w
  let h
  const delay = 200
  let tid

  const canvas = document.getElementById(dom) as any
  const ctx = canvas.getContext('2d')
  init()
  window.addEventListener('resize', () => {
    winResize()
  }, false)

  function winResize() {
    clearTimeout(tid)
    tid = setTimeout(() => {
      getSize()
    }, delay)
  }

  function init() {
    getSize()
    for (let i = 0; i < opt.particleAmount; i++) {
      particle.push(new Partical())
    }
    loop()
  }

  function loop() {
    ctx.clearRect(0, 0, w, h)
    for (let i = 0; i < particle.length; i++) {
      particle[i].update()
      particle[i].draw()
    }
    for (let i = 0; i < particle.length; i++) {
      linePoint(particle[i], particle)
    }
    window.requestAnimationFrame(loop)
  }

  function linePoint(point, hub) {
    for (let i = 0; i < hub.length; i++) {
      const distance = getDistance(point, hub[i])
      const opacity = 1 - distance / opt.minDistance
      if (opacity > 0) {
        ctx.lineWidth = 0.5
        ctx.strokeStyle = `rgba(32,245,245,${opacity})`
        ctx.beginPath()
        ctx.moveTo(point.x, point.y)
        ctx.lineTo(hub[i].x, hub[i].y)
        ctx.closePath()
        ctx.stroke()
      }
    }
  }

  function getDistance(point1, point2) {
    return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2)
  }

  function getSize() {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
  }
  function Partical() {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.speed = opt.defaultSpeed + opt.variantSpeed * Math.random()
    this.directionAngle = Math.floor(Math.random() * 360)
    this.color = opt.particleColor
    this.radius = opt.defaultRadius + Math.random() * opt.variantRadius
    this.vector = {
      x: this.speed * Math.cos(this.directionAngle),
      y: this.speed * Math.sin(this.directionAngle),
    }
    this.update = function () {
      this.border()
      this.x += this.vector.x
      this.y += this.vector.y
    }
    this.border = function () {
      if (this.x >= w || this.x <= 0) {
        this.vector.x *= -1
      }
      if (this.y >= h || this.y <= 0) {
        this.vector.y *= -1
      }
      if (this.x > w) {
        this.x = w
      }
      if (this.y > h) {
        this.y = h
      }
      if (this.x < 0) {
        this.x = 0
      }
      if (this.y < 0) {
        this.y = 0
      }
    }
    this.draw = function () {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fillStyle = this.color
      ctx.fill()
    }
  }
}

onMounted(() => {
  useCanvas('canvas')
})
</script>

<template>
  <div class="min-h-full w-full flex items-center justify-center">
    <van-form class="login-form mb120 mt40 p20" @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="formData.username"
          name="账号"
          label="账号"
          placeholder="账号"
          :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
          v-model="formData.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div class="mt20 flex pl20 pr20">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
      <div class="flex justify-end pl20 pr20">
        <div class="mt12 text-14" @click="toSingup">
          没有账号,注册
        </div>
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
