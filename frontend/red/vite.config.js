import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
    server: {
        proxy: {
            "/api": "http://localhost:8080",
        },
    },
    build: {
        outDir: "../backend/src/main/resources/public",
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
