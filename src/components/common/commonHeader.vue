<template>
  <div class="header">
    <div class="author">
      <div class="logo">
        <!-- <img src="../../assets/img/author.jpg" alt=""> -->
      </div>
      <!-- <div class="name"> DragonX </div> -->
    </div>
    <ul class="menu">
      <li v-for="(item, index) in state.menuList" :key="index" :class="{'active': state.activeMenu == item.value}" @click="switchMenu(item)">
        <span> {{ item.label }} </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  onMounted,
  nextTick,
  watch
} from "vue"
import { ElMessage, ElMessageBox } from 'element-plus'

import type { FormInstance, FormRules } from 'element-plus'
import { useRouter, useRoute } from "vue-router"

export default defineComponent({
  components: {
  },
  setup() {
    const formRef = ref<FormInstance>()
    const formDataRef = ref<FormInstance>()
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      menuList: [
        {
          label: '主页',
          value: 'Home',
        },
        {
          label: '前端',
          value: 'Interview',
        },
        {
          label: '关于',
          value: 'About',
        },
        {
          label: '设计',
          value: 'Design',
        },
        {
          label: '作品',
          value: 'Work',
        },
        {
          label: '联系',
          value: 'Contact',
        },
      ],
      activeMenu: 'Home'
    })

    const switchMenu = (item: any) => {
      state.activeMenu = item.value
      router.push({
        path: item.value
      })

    }

    watch(
      () => router.currentRoute.value.name,
      (val: any) => {
        state.activeMenu = val
      },
      { immediate: true }
    )

    onMounted(() => {
    })

    return {
      state,
      formRef,
      formDataRef,
      switchMenu,
    }
  },
})
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 100px;
  display: flex;
  background-color: black;
  justify-content: space-between;
  .author {
    display: flex;
    padding-left: 120px;
    align-items: center;
    .logo {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .name {
      color: #FFF;
      padding-left: 20px;
      font-size: 24px;
    }
  }
  .menu {
    width: 60%;
    display: flex;
    flex-direction: row;
    height: 100px;
    line-height: 100px;
    justify-content: flex-end;
    li {
      padding: 0 20px;
      span {
        color: #FFF;
        font-size: 20px;
        cursor: pointer;
        position: relative;
      }
      &.active {
        span:after {
          position: absolute;
          display: block;
          height: 1px;
          width: 100%;
          background: #FFF;
          content: '';
          bottom: -6px;
          left: 0;
        }
      }
    }
    
  }
}

</style>
