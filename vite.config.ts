//import glsl from 'vite-plugin-glsl';
import { resolve } from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: './',
    clearScreen: false,
    build: {
        sourcemap: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
            output: {
                manualChunks: {
//                    three: ['three'],
                    vue: ['vue', 'vuex'],
                },
            },
        },
        chunkSizeWarningLimit: 600,
    },
    server: {
        open: true,
    },
    plugins: [
        vue(),
//        glsl(),
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler',
        },
    }
});
