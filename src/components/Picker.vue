<script setup lang="ts">
import { getDictByType } from '@/api/dict'

interface Props {
  modelValue: any
  options?: any // 数组或dictType
  api?: any // scrollLoad时请求接口
  position?: string
  multiple?: boolean // scrollLoad
  fieldNames?: Record<string, any>
  fullScreen?: boolean
  scrollLoad?: boolean // 滚动加载
  valueName?: string // 滚动加载时暂时无法自动获取name
}
const props = withDefaults(defineProps<Props>(), {
  position: 'bottom',
  multiple: false,
  fieldNames: () => ({ text: 'label', value: 'value', children: 'children' }),
})
const emits = defineEmits(['update:modelValue', 'confirm', 'cancel'])

const showColumns = ref<any[]>([])
async function getColumnList() {
  if (Array.isArray(props.options)) {
    showColumns.value = props.options
  }
  else if (typeof props.options === 'string') {
    try {
      const res = await getDictByType(props.options)
      showColumns.value = res.data
    }
    catch (error) {
      console.error(error)
    }
  }
}
onMounted(() => {
  if (!props.scrollLoad) {
    getColumnList()
  }
})

const selectedValues = ref<any[]>([])
const pickerValue = ref<any[]>([])
const showPicker = ref<boolean>(false)
const selectedValuesName = computed<string>(() => {
  return props.valueName || selectedValues.value?.map((item: any) => {
    const type = showColumns.value.find((type: Record<string, any>) => type[props.fieldNames.value] === item)
    return type ? type[props.fieldNames.text] : ''
  }).join(',')
})
function onOpen() {
  pickerValue.value = selectedValues.value
  showPicker.value = true
}
function onConfirm({ selectedValues }: any) {
  selectedValues.value = pickerValue.value
  if (!props.multiple) {
    emits('update:modelValue', selectedValues[0])
    emits('confirm', selectedValues[0])
  }
  else {
    emits('update:modelValue', selectedValues)
    emits('confirm', selectedValues)
  }
  showPicker.value = false
}
function onCancel() {
  showPicker.value = false
  emits('cancel')
}
watch(
  () => props.modelValue,
  () => {
    if (!props.multiple) {
      selectedValues.value = props.modelValue ? [props.modelValue] : []
    }
    else {
      selectedValues.value = props.modelValue
    }
  },
  { immediate: true },
)

const isUpdating = ref(false)
function onCheckboxChange(value) {
  nextTick(() => {
    if (!props.multiple && value.length > 1) {
      pickerValue.value = [value[value.length - 1]]
    }
    isUpdating.value = false
  })
}
</script>

<template>
  <van-field
    v-model="selectedValuesName"
    v-bind="{ ...$attrs, isLink: true, readonly: true }"
    placeholder="请选择"
    @click="onOpen"
  >
    <template v-if="$slots.label" #label>
      <slot name="label" />
    </template>
    <template v-if="$slots.input" #input>
      <slot name="input" />
    </template>
  </van-field>
  <van-popup v-model:show="showPicker" position="bottom" :class="{ 'wh-full': props.fullScreen }">
    <van-picker
      v-if="!props.scrollLoad"
      v-model="pickerValue"
      :columns="showColumns"
      :columns-field-names="fieldNames"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
    <div v-else class="h-full flex flex-col">
      <NavBar title="选择" :back="onCancel" />
      <van-checkbox-group v-model="pickerValue" class="h-0 flex-1 overflow-auto" :shape="multiple ? 'square' : 'round'" @change="onCheckboxChange">
        <DataList search pull-refresh :api="api">
          <template #default="{ item }">
            <div>
              <van-checkbox class="ml16 mr16 border-b-1 border-gray-2 border-b-solid pb16 pt16" :name="item?.[props.fieldNames.value]">
                {{ item?.[props.fieldNames?.text] }}
              </van-checkbox>
            </div>
          </template>
        </DataList>
      </van-checkbox-group>
      <div class="m16 bg-white">
        <van-button class="b-rd-8" type="primary" round block @click="onConfirm({ selectedValues: pickerValue })">
          确定
        </van-button>
      </div>
    </div>
  </van-popup>
</template>
