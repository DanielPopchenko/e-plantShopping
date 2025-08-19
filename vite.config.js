// vite.config.ts or vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// IMPORTANT: your repo name, with leading & trailing slashes
	base: '/shoppingreact/',
});
