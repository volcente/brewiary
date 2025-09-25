import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
		plugins: ['simple-import-sort'],
		rules: {
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
		},
	}),
];

export default eslintConfig;
