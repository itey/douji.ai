import vue from '@vitejs/plugin-vue';
import { resolve } from "path";
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //设置别名
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        additionalData:  `@import "${resolve(__dirname, 'src/assets/style/global.less')}";`,
        javascriptEnabled: true,
      }
    }
  }
})
