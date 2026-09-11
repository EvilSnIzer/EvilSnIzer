import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@react-three/fiber': '/home/user/EvilSnIzer/portfolio/.smoke/stub-canvas.tsx',
      'gsap/ScrollTrigger': '/home/user/EvilSnIzer/portfolio/.smoke/stub-gsap-plugins.js',
      'gsap/SplitText': '/home/user/EvilSnIzer/portfolio/.smoke/stub-gsap-plugins.js',
      three: '/home/user/EvilSnIzer/portfolio/.smoke/stub-three.js',
    },
  },
  build: { ssr: true, outDir: '.smoke/dist', rollupOptions: { input: '.smoke/entry.tsx' } },
})
