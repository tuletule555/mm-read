<script setup lang="ts">
import { getDictByType } from '@/api/dict'

interface Props {
  modelValue: any
  options?: any // 数组或dictType
  position?: string
  multiple?: boolean
  fieldNames?: Record<string, any>
}
const props = withDefaults(defineProps<Props>(), {
  position: 'bottom',
  multiple: false,
  fieldNames: () => ({ text: 'label', value: 'value', children: 'children' }),
})
const emits = defineEmits(['update:modelValue', 'confirm', 'cancel'])

const showColumns = ref<any[]>([])
async function getColumnList() {
  console.log(Array.isArray(props.options), typeof props.options, props.options)
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
  getColumnList()
})

const selectedValues = ref<any[]>([])
const pickerValue = ref<any[]>([])
const showPicker = ref<boolean>(false)
const selectedValuesName = computed<string>(() => {
  return selectedValues.value?.map((item: any) => {
    const type = showColumns.value.find((type: Record<string, any>) => type[props.fieldNames.value] === item)
    return type ? type[props.fieldNames.text] : ''
  }).join(',')
})
function onOpen() {
  pickerValue.value = selectedValues.value
  showPicker.value = true
}
function onConfirm({ selectedValues, selectedOptions, selectedIndexes }: any) {
  console.log(selectedValues, selectedOptions, selectedIndexes)
  selectedValues.value = pickerValue.value
  if (!props.multiple) {
    emits('update:modelValue', selectedValues[0])
  }
  else {
    emits('update:modelValue', selectedValues)
  }
  showPicker.value = false
  emits('confirm', selectedValues)
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
</script>

<template>
  <van-field
    v-model="selectedValuesName"
    v-bind="{ ...$attrs, isLink: true, readonly: true }"
    placeholder="请选择"
    @click="onOpen"
  />
  <van-popup v-model:show="showPicker" position="bottom">
    <van-picker
      v-model="pickerValue"
      :columns="showColumns"
      :columns-field-names="fieldNames"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </van-popup>
</template>
