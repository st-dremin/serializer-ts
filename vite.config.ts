import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'serializer',
			fileName: 'serializer',
		},
		minify: true,
		target: 'esnext',
		emptyOutDir: true,
	},
	plugins: [dts()],
	esbuild: {
		exclude: ['./src/__tests__/*']
	}
});
