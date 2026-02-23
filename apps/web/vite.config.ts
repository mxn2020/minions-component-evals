import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/',
    optimizeDeps: {
        include: ['@minions-component-evals/sdk'],
    },
    build: {
        commonjsOptions: {
            include: [/component-evals/, /node_modules/],
        },
    },
});
