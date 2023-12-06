import ThemeSwitcher from "@/components/ThemeSwitcher"
import { Appear, FadeIn, FadeOut, ZoomIn, ZoomOut } from "@/components/animation/Basics"


export default function HomePage() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-8 gap-16 max-w-5xl mx-auto'>
			<Appear>
				<h1 className='text-6xl font-display'>Nextjs 14</h1>
			</Appear>
			<FadeIn delay={2}>
				<h2 className='text-xl font-text'>
					with <strong>TailwindCSS, Dark Mode, Framer Motion, Vercel Analytics, Google Tag Manager, and more...</strong>
				</h2>
			</FadeIn>
			<ZoomIn delay={3}>
				<p className='text-lg font-display'>
					<a href='https://x.com/anxelli_dev' target='_blank' rel='noopener noreferrer'>
						<small>by</small> <strong>@anxelli_dev</strong>
					</a>
				</p>
				<small>Change to: <ThemeSwitcher/></small>
			</ZoomIn>
		</main>
	)
}
