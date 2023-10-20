import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  server: {
    host: `0.0.0.0`,
    open: true,// 自动打开网页
  },
  resolve: {

  },
  define: {
    'process.env': {

    }
  }
})
