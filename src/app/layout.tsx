import './styles/globals.css';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import { ThemeProvider } from '~/components/theme-provider/theme-provider';

import { commitMono, spaceGrotesk } from './styles/fonts';

export const metadata: Metadata = {
	title: 'Brewiary',
	description: 'Next Generation Coffee Companion',
	applicationName: 'Brewiary',
	appleWebApp: {
		title: 'Brewiary',
	},
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html
			className={`${commitMono.variable} ${spaceGrotesk.variable}`}
			lang='en'
			suppressHydrationWarning
		>
			<body className='font-sans antialiased'>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					disableTransitionOnChange
					enableColorScheme
					enableSystem
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
