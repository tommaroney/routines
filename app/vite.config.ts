import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log()
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'http://server:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }

  return config;
});
