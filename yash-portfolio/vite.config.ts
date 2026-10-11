import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The 3D hero is loaded with React.lazy (see Hero.tsx), so Vite automatically
// puts Three.js in its own file that only downloads when it is needed.
export default defineConfig({
  plugins: [react()],
  build: { chunkSizeWarningLimit: 900 },
})
