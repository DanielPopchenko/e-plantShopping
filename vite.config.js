// vite.config.ts or vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	base: '/e-plantShopping/', // <-- MUST match this repo name exactly (case-sensitive)
});
