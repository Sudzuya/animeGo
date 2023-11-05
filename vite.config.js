import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    host: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                  @import "./src/app/styles/_mixins.scss";
                  @import "./src/app/styles/_variables.scss";
                  @import "./src/app/styles/_null.scss";
                `
      }
    }
  },
  resolve: {
    alias: [
      {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
      {find: '@styles', replacement: fileURLToPath(new URL('./src/app/styles/', import.meta.url))},
      {find: '@icon', replacement: fileURLToPath(new URL('./src/shared/assets/icon/', import.meta.url))},
      {find: '@pages', replacement: fileURLToPath(new URL('./src/pages/', import.meta.url))},
      {find: '@ui', replacement: fileURLToPath(new URL('./src/shared/ui', import.meta.url))},
      {find: '@api', replacement: fileURLToPath(new URL('./src/shared/api/', import.meta.url))},
      {find: '@store', replacement: fileURLToPath(new URL('./src/shared/store/', import.meta.url))},
      {find: '@widgets', replacement: fileURLToPath(new URL('./src/widgets/', import.meta.url))},
      {find: '@entities', replacement: fileURLToPath(new URL('./src/entities/', import.meta.url))},
      {find: '@layout', replacement: fileURLToPath(new URL('./src/layout/', import.meta.url))},
      {find: '@features', replacement: fileURLToPath(new URL('./src/features/', import.meta.url))},
    ],
  }
})