'use client';

import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

import LoadingBoxes from '@/assets/animations/Loading-boxes.json';

export function Loading() {
	return (
		<motion.div
			className='flex items-center justify-center flex-col'
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
		>

			<Lottie
				className='w-32 h-32 md:w-60 md:h-60'
				animationData={LoadingBoxes}
			/>
			<p
				className='text-sm text-zinc-700'
			>
				Gerando
			</p>
		</motion.div>
	)
}
