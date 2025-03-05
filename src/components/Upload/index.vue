<script setup lang="ts">
import { showImagePreview, showToast } from 'vant'
import { uploadFile } from '@/api/file/index'

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  disabled: false,
  fileSize: 0,
  previewImage: true,
  reupload: false,
  api: undefined,
})

const emits = defineEmits(['update:modelValue', 'success', 'failed'])

interface Props {
  modelValue: Array<any> | any
  fileSize?: number
  limit?: number
  disabled?: boolean
  readonly?: boolean
  previewImage?: boolean
  reupload?: boolean
  api?: any
}

const fileList = computed<Array<any>>({
  get() {
    if (!Array.isArray(props.modelValue) && props.limit === 1) {
      if (props.modelValue) {
        return [props.modelValue]
      }
      else {
        return []
      }
    }
    else {
      return props.modelValue
    }
  },
  set(v) {
    if (props.limit === 1) {
      if (v.length > 0) {
        emits('update:modelValue', v[0])
      }
      else {
        emits('update:modelValue', undefined)
      }
    }
    else {
      emits('update:modelValue', v)
    }
  },
})

async function afterRead(file: any) {
  file.status = 'uploading'
  file.message = '上传中...'
  // 此时可以自行将文件上传至服务器
  try {
    const formData = new FormData()
    formData.set('file', file.file)
    const _fun = props.api || uploadFile
    const res: Record<string, any> = await _fun(formData)
    file.status = 'done'
    file.message = '上传完成'
    file.url = res.data.url
    file.id = res.data.id
    file.name = res.data.name
    console.log(fileList.value)
    emits('success', file)
  }
  catch {
    file.status = 'failed'
    file.message = '上传失败'
    emits('failed', file)
  }
}

function onOversize() {
  showToast(`文件大小不能超过${props.fileSize}MB`)
}

function onDelete(item: any, index: number) {
  fileList.value = fileList.value.filter((file: any, fileIndex: number) => {
    return fileIndex !== index
  })
}

function onViewImage(item: any) {
  showImagePreview([item.preview_url])
}

function getFileType(file: any) {
  const fileName = file.name
  const suffix = fileName?.substring(fileName.lastIndexOf('.') + 1).toLowerCase() ?? ''
  switch (suffix) {
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'bmp':
    case 'gif':
      return 'image'
    default:
      return 'other'
  }
}
</script>

<template>
  <div class="upload-box">
    <van-uploader
      v-model="fileList"
      :disabled="disabled"
      :after-read="afterRead"
      :max-count="limit"
      :max-size="fileSize ? fileSize * 1024 * 1024 : undefined"
      v-bind="$attrs"
      :preview-image="previewImage"
      :reupload="reupload"
      @oversize="onOversize"
    >
      <slot>
        <van-button icon="plus" type="primary">
          上传文件
        </van-button>
      </slot>
      <template #preview-cover="{ file }">
        <slot name="preview-cover" :file="file" />
      </template>
    </van-uploader>
  </div>
</template>

<style lang="scss" scoped>
.upload-box {
  display: flex;
  flex-wrap: wrap;
}
.upload-file {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  margin: 4px;
  &--image {
  }
  &--pdf {
    color: #2980ff;
  }
  &--other {
    color: #2980ff;
  }
  &--upload {
    background: #f5f8fe;
  }
  &__close {
    position: absolute;
    top: -7px;
    right: -7px;
    width: 14px;
    height: 14px;
  }
}
.upload-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
}
</style>
