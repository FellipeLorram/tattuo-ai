'use client';

import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

import LoadingBoxes from '@/assets/animations/BOXS.json';

export function Loading() {
	return (
		<motion.div
			className='flex items-center justify-center flex-col'
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
		>

			<Lottie
				className='w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60'
				animationData={LoadingBoxes}
			/>
						<div className="h-px w-px rounded-full shadow-[0_-50px_300px_70px_rgba(79,70,229,0.20)] md:shadow-[0_-100px_300px_100px_rgba(79,70,229,0.15)]"></div>

			<p
				className='text-sm text-gray-300 -mt-5'
			>
				Gerando
			</p>
		</motion.div>
	)
}
