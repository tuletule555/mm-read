<script setup lang="ts">
import { getDictByType } from '@/api/dict'
import type { ImageDto } from '@/api/images/interface'
import Picker from '@/components/Picker.vue'

definePage({
  name: 'image.add',
  meta: {
    title: '上传图片',
    showTabbar: false,
  },
})

onMounted(() => {
})

const formData = ref<ImageDto>({})
</script>

<template>
  <div>
    <van-form>
      <van-cell-group inset>
        <Picker
          v-model="formData.type"
          label-align="top"
          options="wallpaper_type"
          name="type"
          label="壁纸类型"
        />
      </van-cell-group>
      <van-cell-group inset>
        <Picker
          v-model="formData.styles"
          multiple
          label-align="top"
          options="wallpaper_style"
          name="type"
          label="壁纸风格"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
