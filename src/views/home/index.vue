<template>
  <div class="home">
    <div class="contain">
      <div class="header-bg">
        <img src="../../assets/img/bg2.png" alt="">
      </div>
      <div class="main">

      </div>
    </div>
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

import type { FormInstance, FormRules } from 'element-plus'

export default defineComponent({
  components: {
  },
  setup() {
    const formRef = ref<FormInstance>()
    const formDataRef = ref<FormInstance>()
    const state = reactive({
      dialogVisible: false
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
.home {
  .contain {
    .header-bg {
      img{
        width: 100%;
      }
    } 
  }
}

</style>
