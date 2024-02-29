import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    lib: {
      name: 'vue-scroll-parallax',
      entry: resolve(__dirname, 'packages/index.ts'),
      fileName: 'vue-scroll-parallax'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        externalLiveBindings: false,
        globals: {
          vue: 'Vue'
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    }
  }
});
