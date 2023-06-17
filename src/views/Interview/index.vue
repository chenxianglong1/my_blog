<template>
  <div class="interview">
    <common-header></common-header>
    <div class="contain">
      <div class="menu">
        <div class="wrap" v-for="(item, index) in state.tableData" :key="index">
          <div class="type-name"> {{ item.type }} </div>
          <div class="item-wrap" v-for="(i, idx) in item.children" :key="idx">
            <div class="item">
              <span> {{ i.name }} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="main"></div>
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
      tableData: [
        {
          type: 'vue',
          children: [
            {
              name: '11111111'
            },
            {
              name: '22222222'
            },
            {
              name: '333333333'
            },
            {
              name: '444444444'
            },
          ]
        }
      ]
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
  .contain {
    .menu {
      .wrap {
        .type-name {

        }
        .item-wrap {
          .item {
            
          }
        }
      }
    }
  }
}

</style>
