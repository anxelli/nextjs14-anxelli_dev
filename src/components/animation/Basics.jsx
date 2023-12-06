'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'


export function Appear({ children, delay, duration }) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	const customDelay = delay || 0.5
	const customDuration = duration || 2

	return (
		<div ref={ref}>
			<motion.div
				initial={{
					opacity: 0,
					scale: 0,
				}}
				animate={{
					opacity: isInView ? 1 : 0,
					scale: isInView ? 1 : 0,
				}}
				transition={{
					delay: customDelay,
					duration: customDuration,
					ease: 'easeInOut',
					type: 'spring'
				}}
			>
				{children}
			</motion.div>
		</div>
	)
}


export function FadeIn({ children, delay, duration, x, y }) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	const customDelay = delay || 0.5
	const customDuration = duration || 1
	const customX = x || 0
	const customY = y || 0

	return (
		<div ref={ref}>
			<motion.div
				initial={{
					opacity: 0,
					transform: `translate(${customX}px, ${customY}px)`,
				}}
				animate={{
					opacity: isInView ? 1 : 0,
					transform: 'translate(0px, 0px)',
				}}
				transition={{
					delay: customDelay,
					duration: customDuration,
					ease: 'easeInOut',
					type: 'spring'
				}}
			>
				{children}
			</motion.div>
		</div>
	)
}

export function FadeOut({ children, delay, duration, x, y }) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	const customDelay = delay || 0.5
	const customDuration = duration || 1
	const customX = x || 0
	const customY = y || 0

	return (
		<div ref={ref}>
			<motion.div
				initial={{
					opacity: 1,
					transform: `translate(${customX}px, ${customY}px)`,
				}}
				animate={{
					opacity: isInView ? 0 : 1,
					transform: 'translate(0px, 0px)',
				}}
				transition={{
					delay: customDelay,
					duration: customDuration,
					ease: 'easeInOut',
					type: 'spring'
				}}
			>
				{children}
			</motion.div>
		</div>
	)
}


export function ZoomIn({ children, delay, duration, scale }) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	const customDelay = delay || 0.5
	const customDuration = duration || 1
	const customScale = scale || 1.5

	return (
		<div ref={ref}>
			<motion.div
				initial={{
					scale: customScale,
					opacity: 0,
				}}
				animate={{
					scale: isInView ? 1 : customScale,
					opacity: isInView ? 1 : 0,
				}}
				transition={{
					delay: customDelay,
					duration: customDuration,
					ease: 'easeInOut',
					type: 'spring'
				}}
			>
				{children}
			</motion.div>
		</div>
	)
}


export function ZoomOut({ children, delay, duration, scale }) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	const customDelay = delay || 0.5
	const customDuration = duration || 1
	const customScale = scale || 1.5
	const scaleX2 = customScale * 2

	return (
		<div ref={ref}>
			<motion.div
				initial={{
					scale: customScale,
					opacity: 1,
				}}
				animate={{
					scale: isInView ? scaleX2 : customScale,
					opacity: isInView ? 0 : 1,
				}}
				transition={{
					delay: customDelay,
					duration: customDuration,
					ease: 'easeInOut',
					type: 'spring'
				}}
			>
				{children}
			</motion.div>
		</div>
	)
}
