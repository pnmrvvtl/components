import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { readFileSync, writeFileSync } from 'fs';

// const useClient = () => {
//   return {
//     name: 'vite-plugin-use-client',
//     closeBundle() {
//       const filePath = path.resolve(__dirname, 'dist/pnmrvvtl-components.es.js');
//       const fileContent = readFileSync(filePath, 'utf8');
//       const newContent = `'use client';\n${fileContent}`;
//       writeFileSync(filePath, newContent, 'utf8');
//     },
//   };
// };

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      outDir: 'dist',
      rollupTypes: true
    }),
    libInjectCss(),
    // useClient(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'PnmrvvtlComponents',
      formats: ['es', 'cjs'],
      fileName: (format) => `pnmrvvtl-components.${format}.js`,
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
