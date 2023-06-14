<template>
  <div class="interview">
    <common-header></common-header>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  onMounted,
  nextTick
} from "vue"
import { ElMessage, ElMessageBox } from 'element-plus'
import CommonHeader from '@/components/common/commonHeader.vue'

import type { FormInstance, FormRules } from 'element-plus'

export default defineComponent({
  components: {
    CommonHeader
  },
  setup() {
    const formRef = ref<FormInstance>()
    const formDataRef = ref<FormInstance>()
    const state = reactive({
      dialogVisible: false,
    })

    const addHandle = () => {
      state.dialogVisible = true
    }
    onMounted(() => {
    })
    return {
      state,
      formRef,
      formDataRef,
      addHandle,
    }
  },
})
</script>

<style scoped lang="less">
.interview {
  height: 100%;
  width: 100%;
}

</style>
