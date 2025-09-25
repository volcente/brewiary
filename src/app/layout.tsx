import './styles/globals.css';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import { commitMono, spaceGrotesk } from './styles/fonts';

export const metadata: Metadata = {
	title: 'Brewiary',
	description: 'Next Generation Coffee Companion',
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html
			className={`${commitMono.variable} ${spaceGrotesk.variable}`}
			lang='en'
		>
			<body className='bg-stone-200 font-sans text-stone-900 antialiased dark:bg-stone-900 dark:text-stone-200'>
				{children}
			</body>
		</html>
	);
}
