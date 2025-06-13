<script setup lang="ts">
import type { ShareDto } from '@/api/share/interface'
import { getBook, getBooks } from '@/api/book'
import { addShare, editShare, getShare } from '@/api/share'

const router = useRouter()
const route = useRoute()
definePage({
  name: 'share.add',
  meta: {
    title: '新增分享',
    showTabbar: false,
  },
})

const formData = ref<ShareDto>({
  title: '',
  content: '',
  public: 1,
})

async function onSubmit() {
  try {
    const data = {
      title: formData.value.title.trim(),
      content: formData.value.content.trim(),
      public: formData.value.public,
      book: { id: formData.value.book_id },
    }
    if (route.query.id) {
      await editShare(route.query.id as string, data)
    }
    else {
      await addShare(data)
    }
    router.back()
  }
  catch (error) {
    console.error(error)
  }
}

async function onBookConfirm(value: any) {
  try {
    const res = await getBook(value)
    formData.value.book = res.data
  }
  catch (error) {
    console.error(error)
  }
}

async function getData() {
  if (!route.query.id)
    return
  try {
    const res = await getShare(route.query.id as string)
    formData.value = { ...res.data, book_id: res.data?.book?.id }
  }
  catch (error) {
    console.error(error)
  }
}
onMounted(() => {
  getData()
})
</script>

<template>
  <div class="min-h-full flex flex-col pt16">
    <van-form class="h-0 flex-1">
      <van-cell-group inset>
        <!-- <Picker
          v-model="formData.type"
          label-align="top"
          options="wallpaper_type"
          name="type"
          label="壁纸类型"
        />
        <Picker
          v-model="formData.styles"
          multiple
          label-align="top"
          options="wallpaper_style"
          name="type"
          label="壁纸风格"
        /> -->
        <van-field v-model="formData.title" label="标题" label-align="top" placeholder="请输入标题" required />
        <van-field v-model="formData.content" label="内容" label-align="top" type="textarea" placeholder="请输入内容" required rows="10" autosize />
        <Picker
          v-model="formData.book_id"
          label-align="top"
          :api="getBooks"
          name="type"
          :field-names="{ text: 'name', value: 'id', children: 'children' }"
          full-screen
          scroll-load
          :multiple="false"
          label="关联书籍"
          :value-name="formData.book?.name"
          @confirm="onBookConfirm"
        >
          <!-- <template v-if="formData.book" #input>
            <div v-if="formData.book">
              {{ formData.book?.name }}
            </div>
          </template> -->
        </Picker>
        <van-field name="public" label="所有人可见" input-align="right">
          <template #input>
            <van-switch v-model="formData.public":active-value="1" :inactive-value="0" />
          </template>
        </van-field>
      </van-cell-group>
    </van-form>
    <div style="margin: 16px;">
      <van-button round block type="primary" @click="onSubmit">
        提交
      </van-button>
    </div>
  </div>
</template>
