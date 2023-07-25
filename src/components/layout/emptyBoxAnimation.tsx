'use client';
import Lottie from 'lottie-react';
import emptyBox from '@/assets/animations/empty-box.json';

export function EmptyBoxAnimation() {
	return (
		<div className='flex flex-col items-center justify-center'>
			<Lottie
				className='w-60 h-60'
				loop={false}
				animationData={emptyBox}
			/>

			<p className='text-sm text-zinc-500'>
				Nada por aqui...
			</p>
		</div>
	)
}
