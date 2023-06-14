<template>
  <div class="home">
    <div class="contain">
      <div class="header">
        <div class="author">
          <div class="logo">
            <img src="../../assets/img/author.jpg" alt="">
          </div>
          <div class="name"> DragonX </div>
        </div>
        <ul class="menu">
          <li v-for="(item, index) in state.menuList" :key="index" :class="{'active': state.activeMenu == item.value}" @click="switchMenu(item)">
            <span> {{ item.label }} </span>
          </li>
        </ul>
      </div>
      <div class="main">
        <span> I am a web designer </span> <br />
        <span> Welcome to my personal website </span>
        <div class="view-button">
          VIEW MY WORK
        </div>
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
import { useRouter } from "vue-router"

export default defineComponent({
  components: {
  },
  setup() {
    const formRef = ref<FormInstance>()
    const formDataRef = ref<FormInstance>()
    const router = useRouter()
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
          value: 'Call',
        },
      ],
      activeMenu: 'Home'
    })

    const switchMenu = (item: any) => {
      state.activeMenu = item.value
      router.push({
        name: item.value
      })

    }
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
.home {
  width: 100%;
  height: 100%;
  .contain {
    width: 100%;
    height: 100%;
    background: url('../../assets/img/bg7.jpeg');
    background-size: 100% 100%;
    position: relative;
    .header {
      height: 100px;
      display: flex;
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
        width: 40%;display: flex;
        flex-direction: row;
        height: 100px;
        line-height: 100px;
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
    .main {
      width: 100%;
      position: absolute;
      top: 42%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      span {
        height: 34px;
        line-height: 34px;
        font-size: 32px;
        color: #FFF;
      }
      .view-button {
        margin: auto auto;
        margin-top: 30px;
        border: 1px solid #FFF;
        height: 48px;
        line-height: 48px;
        color: #FFF;
        width: 250px;
        text-align: center;
        font-size: 22px;
        transition: font-size 1s linear;
        cursor: pointer;
        &:hover {
          font-size: 24px;
        }
      }
    }
  }
}

</style>
