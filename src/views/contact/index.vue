<template>
  <div class="contact">
    <common-header></common-header>
    <div class="container">
      <div class="operation-box">
        <el-button type="primary" @click="addHandle">新增</el-button>
      </div>
      <div class="table-box">
        <el-table
          :data="state.tableData"
          height="100%"
          class="table"
          style="width: 100%"
          stripe
          :border="true"
          row-key="id"
          :header-cell-style="{background: '#F6F6F6', fontWeight: '500', color: '#161C24'}"
        >
          <el-table-column
            v-for="item in state.columns"
            :prop="item.prop"
            :label="item.label"
            :key="item.prop">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template #default="scope">
              <el-button link type="primary" size="small" @click="editHandle(scope)"
                >修改</el-button
              >
              <el-button link type="primary" size="small" @click="deleteHandle(scope)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <advice-dialog
      v-if="state.adviceDialogVisible"
      @closeHandle="closeHandle"
    ></advice-dialog>
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
import AdviceDialog from "./components/adviceDialog.vue"
import { getRoute } from '@/service/contact'

import type { FormInstance, FormRules } from 'element-plus'

export default defineComponent({
  components: {
    CommonHeader,
    AdviceDialog
  },
  setup() {
    const formRef = ref<FormInstance>()
    const formDataRef = ref<FormInstance>()
    const state = reactive({
      dialogVisible: false,
      tableData: [
        {
          name: 'cxl',
          age: 18,
          sex: 'man',
          advice: '111111111111111111'
        }
      ],
      columns: [
        {
          label: '姓名',
          prop: 'name',
        },
        {
          label: '年龄',
          prop: 'age',
        },
        {
          label: '性别',
          prop: 'sex',
        },
        {
          label: '建议',
          prop: 'advice',
        },
      ],
      adviceDialogVisible: false
    })

    const addHandle = () => {
      state.adviceDialogVisible = true
    }
    const editHandle = (scope: any) => {
      console.log(scope, 'scope')
    }
    const deleteHandle = (scope: any) => {
      console.log(scope, 'scope')
    }
    const closeHandle = (type: string) => {
      state.adviceDialogVisible = false
    }
    const getRouteApi = () => {
      getRoute({}).then(res => {
        console.log(res, '123')
      })
    }
    onMounted(() => {
      getRouteApi()
    })
    return {
      state,
      formRef,
      formDataRef,
      addHandle,
      editHandle,
      deleteHandle,
      closeHandle,
      getRouteApi
    }
  },
})
</script>

<style scoped lang="less">
.contact {
  height: 100%;
  width: 100%;
  .container {
    padding: 16px;
    .operation-box {
      padding-bottom: 16px;
    }
  }
}

</style>
