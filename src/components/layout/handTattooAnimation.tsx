'use client';

import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import HandTattoo from '@/assets/animations/icon_tatouage.json';


export function HandTattooAnimation() {
	return (
		<motion.div
			className='flex flex-col items-center justify-center gap-2 rounded-full backdrop-blur-3xl back relative'
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
		>

			<Lottie
				className='w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60'
				animationData={HandTattoo}
				loop={false}
			/>
			<div className="h-px w-px rounded-full shadow-[0_-90px_300px_70px_rgba(79,70,229,0.25)] md:shadow-[0_-100px_300px_100px_rgba(79,70,229,0.20)]"></div>
			<p
				className='text-sm text-gray-300'
			>
				Comece a criar sua Arte.
			</p>
		</motion.div>
	)
}
