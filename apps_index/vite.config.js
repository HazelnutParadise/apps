import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        // 設置資產文件名，移除特殊字符
        assetFileNames: `assets/[name].[hash].css`,
        // 設置 chunk 文件名，適用於 JS 模組
        chunkFileNames: `assets/[name].[hash].js`,
        // 設置入口點的 JS 文件名
        entryFileNames: `assets/[name].[hash].js`
      }
    }
  }
})

