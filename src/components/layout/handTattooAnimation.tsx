'use client';

import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import HandTattoo from '@/assets/animations/hand-tattuo.json';


export function HandTattooAnimation() {
	return (
		<motion.div
			className='flex flex-col items-center justify-center gap-2'
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
		>

			<Lottie
				className='w-32 h-32 md:w-60 md:h-60'
				animationData={HandTattoo}
				loop={false}
			/>
			<p
				className='text-sm text-zinc-700'
			>
				Comece a criar sua Arte.
			</p>
		</motion.div>
	)
}
