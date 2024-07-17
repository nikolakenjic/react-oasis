import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add any necessary aliases here if needed
    },
    dedupe: ['date-fns'], // Ensure Vite deduplicates 'date-fns' imports
  },
  optimizeDeps: {
    include: ['date-fns'],
  },
});
