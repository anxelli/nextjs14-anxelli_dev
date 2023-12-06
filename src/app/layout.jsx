import { Audiowide, Prompt } from 'next/font/google'
import './globals.css'
import Provider from './Providers'


const display = Audiowide({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
	variable: '--font-display'
})
const text = Prompt({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
	variable: '--font-text'
})


export const metadata = {
	title: 'NextJS 14 - @anxelli_dev Template',
	description: 'NextJS 14 base configuration with TailwindCSS, Dark Mode, Framer Motion, Vercel Analytics, Google Tag Manager, and more... by @anxelli_dev'
}


export default function RootLayout({ children }) {
	return (
		<html lang='es-MX' className={`${display.variable} ${text.variable}`}>
			<body>
				<Provider>
					{children}
				</Provider>
			</body>
		</html>
	)
}
