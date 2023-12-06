'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'


const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const renderThemeChanger = () => {
		if (!mounted) return null;

		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<button
					className='w-6 h-6 text-yellow-500'
					onClick={() => setTheme('light')}
				>
						Light
				</button>
			)
		}

		else {
			return (
				<button
					className='w-6 h-6 text-gray-900'
					onClick={() => setTheme('dark')}
				>
					Dark
				</button>
			)
		}
	};

	return (
		<>
			{renderThemeChanger()}
		</>
	);
};

export default ThemeSwitcher
