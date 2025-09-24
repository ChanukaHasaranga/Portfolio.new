// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/Portfolio.new/', // Must match the repository name
  plugins: [react()], // Enable React plugin for JSX/TSX processing
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
});