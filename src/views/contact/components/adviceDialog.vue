<template>
  <el-dialog v-model="state.visible" width="460px" title="新增意见" @close="closeHandle">
    <el-form
      ref="formRef"
      :model="state.form"
      :rules="state.rules"
      label-width="80px"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="state.form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="state.form.age"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-input v-model="state.form.sex"></el-input>
      </el-form-item>
      <el-form-item label="意见" prop="advice">
        <el-input type="textarea" v-model="state.form.advice"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeHandle">取消</el-button>
        <el-button type="primary" @click="submitForm(formRef)">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">

import {
  defineComponent,
  reactive,
  ref,
  onMounted,
  nextTick,
  computed
} from "vue"

import { ElMessage, ElMessageBox } from 'element-plus'

import type { FormInstance, FormRules } from 'element-plus'

export default defineComponent({
  props: ['appList'],
  components: {
  },
  setup(props, context) {
    const formRef = ref<FormInstance>()
    const state = reactive({
      visible: true,
      form: {
        name: '',
        age: '',
        sex: '',
        advice: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名字', trigger: 'blur' },
        ],
      },
      loading: false

    })

    const closeHandle = () => {
      context.emit('closeHandle', 'advice')
    }

    const submitForm = async (formEl: FormInstance | undefined) => {
      if (!formEl) return
      await formEl.validate(async(valid, fields) => {
        if (valid) {
          console.log('yes')
        } else {
          console.log('error submit!', fields)
        }
      })
    }

    onMounted(() => {
    })
    return {
      state,
      closeHandle,
      submitForm,
      formRef
    }
  },
})

</script>

<style scoped lang="less">

</style>