import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 关键修改：设置基础路径
  base: '/resume/',
  build: {
    outDir: 'dist'
  }
});
