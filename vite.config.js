import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    if (mode === 'app') {
        return {
            plugins: [vue()],
        };
    } else {
        return {
            plugins: [vue()],
            resolve: {
                alias: {
                    '@': fileURLToPath(new URL('./src', import.meta.url)),
                },
            },
            build: {
                lib: {
                    entry: path.resolve(
                        __dirname,
                        'src/LaravelVuePagination.vue'
                    ),
                    name: 'LaravelVuePagination',
                    fileName: (format) => `laravel-vue-pagination.${format}.js`,
                },
                rollupOptions: {
                    external: ['vue'],
                    output: {
                        globals: {
                            vue: 'Vue',
                        },
                    },
                },
            },
        };
    }
});
