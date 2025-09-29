// @ts-check
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPrettierPlugin from 'eslint-plugin-prettier/recommended';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const ignores = globalIgnores([
	'node_modules/',
	'.next/',
	'out/',
	'dist/',
	'build/',
	'coverage/',
	'.turbo/',
	'.vercel/',
	'.cache/',
	'.pnpm-store/',
	'public/',
	'drizzle/meta/',
	'drizzle/**/*.sql',
	'next-env.d.ts',
	'**/*.d.ts',
	'.env*',
	'*.log',
	'.DS_Store',
	'.git/',
	'.husky/',
	'.vscode/',
	'.idea/',
	'tmp/',
	'temp/',
	'pnpm-lock.yaml',
	'yarn.lock',
	'package-lock.json',
	'**/*.min.*',
]);

const eslintConfig = defineConfig(
	ignores,
	eslint.configs.recommended,
	tseslint.configs.strict,
	tseslint.configs.stylistic,
	...compat.config({
		extends: ['next', 'plugin:drizzle/recommended'],
		plugins: ['drizzle'],
	}),
	{
		plugins: { 'simple-import-sort': simpleImportSortPlugin },
		rules: {
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
		},
	},
	eslintPrettierPlugin,
);

export default eslintConfig;
