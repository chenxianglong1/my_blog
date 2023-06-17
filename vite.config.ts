import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 这里配置别名
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 9494,
    proxy: {
      "/mc": {
        target: "https://apaas-sit.meicloud.com",
        changeOrigin: true,
      },
    },
  },
})
