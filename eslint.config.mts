// @ts-check

import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const eslintConfig = defineConfig(
	eslint.configs.recommended,
	tseslint.configs.strict,
	tseslint.configs.stylistic,
	...compat.config({
		extends: [
			'next/core-web-vitals',
			'next/typescript',
			'plugin:drizzle/recommended',
			'plugin:prettier/recommended',
		],
		plugins: ['drizzle', 'simple-import-sort', 'prettier'],
		rules: {
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
		},
	}),
);

export default eslintConfig;
