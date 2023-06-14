import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/index.vue';

// @ts-ignore
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: (_: any) => {
      return { path: '/home' };
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "About" */ '@/views/About.vue')
  },
  {
    path: '/interview',
    name: 'Interview',
    component: () =>
      import(/* webpackChunkName: "Interview" */ '@/views/interview/index.vue')
  },
  {
    path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
    redirect: (_: any) => {
      return { path: '/404' };
    }
  }
];
const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior(to: any, from: any, savedPosition: any) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    };
  }
});
export default router;