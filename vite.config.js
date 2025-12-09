import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',
    build: {
        outDir: 'dist',
        rollupOptions: {
            external: [
                'three',
                'three/addons/controls/OrbitControls.js',
                /^three\/addons\/.*/,
            ]
        }
    }
});
