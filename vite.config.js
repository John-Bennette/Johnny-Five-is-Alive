import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Johnny-five-is-alive/', // Ensure this matches your GitHub repository name
  plugins: [vue()],
  build: {
    outDir: 'dist', // Ensure the output directory is set to 'dist'
    assetsDir: 'assets', // Ensure assets are placed in the 'assets' directory
    // ...other build options...
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  server: {
    fs: {
      allow: [
        // Allow serving files from the project root and the src directory
        path.resolve(__dirname),
        path.resolve(__dirname, 'src'),
      ],
    },
  }
});
