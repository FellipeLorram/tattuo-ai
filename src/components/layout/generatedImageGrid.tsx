import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
	urls: string[];
}

export function GeneratedImageGrid({ urls }: Props) {
	const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
	const [selectedIndex, setSelectedIndex] = useState(0);

	function handleImageClick(url: string, index: number) {
		setSelectedUrl(url);
		setSelectedIndex(index);
	}

	return (
		<div
			className='flex flex-wrap items-center justify-center w-full max-w-2xl gap-4 p-2'
		>
			{urls.map((url, index) => (
				<motion.div
					className='flex items-center justify-center'
					onClick={() => handleImageClick(url, index)}
					layoutId={url}
					key={url}
				>
					<Image
						className='rounded-md max-w-full w-full h-full md:w-52 md:h-w-52 lg:w-64 lg:h-w-64'
						alt='Imagem gerada'
						src={url}
						width={512}
						height={512}
					/>
				</motion.div>
			))}

			{selectedUrl && (
				<AnimatePresence mode='wait'>
					<motion.div
						initial={{ background: 'rgb(0 0 0 / 0.0)', backdropFilter: 'blur(0px)' }}
						animate={{ background: 'rgb(0 0 0 / 0.5)', backdropFilter:  'blur(10px)' }}
						onClick={() => setSelectedUrl(null)}
						className='w-full fixed inset-0 flex items-center justify-center bg-black/70 z-40 p-2'>
						<motion.div
							className='flex items-center justify-center'
							layoutId={urls[selectedIndex]}
						>
							<Image
								className='rounded-md'
								alt='Imagem gerada'
								src={selectedUrl}
								width={512}
								height={512}
							/>
						</motion.div>
					</motion.div>
				</AnimatePresence>
			)}
		</div>
	)
}
