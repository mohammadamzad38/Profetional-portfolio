import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // Set base path for assets - use relative paths for Netlify
  base: mode === 'production' ? './' : '/',
  resolve: {
    alias: {
      // Fix Three.js compatibility issues
      'three': 'three',
    }
  },
  build: {
    rollupOptions: {
      output: {
        // Temporarily disable manual chunks to fix compatibility issues
        // manualChunks: (id) => {
        //   // Simple chunking strategy to avoid compatibility issues
        //   if (id.includes('node_modules')) {
        //     if (id.includes('react') || id.includes('react-dom')) {
        //       return 'react-vendor';
        //     }
        //     if (id.includes('three') || id.includes('@react-three')) {
        //       return 'three-vendor';
        //     }
        //     if (id.includes('framer-motion')) {
        //       return 'animation-vendor';
        //     }
        //     return 'vendor';
        //   }
        // },
        // Optimize chunk naming
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable source maps for debugging (optional)
    sourcemap: mode === 'analyze',
    // Minify CSS
    cssMinify: true,
    // Target modern browsers for better tree-shaking
    target: 'esnext',
    // Use default minifier instead of terser
    minify: true,
    // Ensure assets are copied correctly
    assetsInlineLimit: 0,
    // Ensure outDir is set correctly
    outDir: 'dist',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: [
      '@react-three/drei', 
      '@react-three/postprocessing',
      'three-stdlib',
      'troika-three-utils'
    ]
  },
  // Enable CSS code splitting
  cssCodeSplit: true,
}));
