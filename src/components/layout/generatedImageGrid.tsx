import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Button, buttonVariants } from '../ui/button';
import { Download, PenLine, Save } from 'lucide-react';
import axios from 'axios';

interface Props {
	urls: string[];
}

export function GeneratedImageGrid({ urls }: Props) {
	const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [loading, setLoading] = useState(false);

	function handleImageClick(url: string, index: number) {
		setSelectedUrl(url);
		setSelectedIndex(index);
	}

	async function saveImage(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.stopPropagation();
		setLoading(true);
		await axios.post('/api/save-image', {
			imageUrl: selectedUrl,
			prompt: 'prompt',
		});
		setLoading(false);
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
						animate={{ background: 'rgb(0 0 0 / 0.9)', backdropFilter: 'blur(8px)' }}
						onClick={() => setSelectedUrl(null)}
						className='w-full fixed inset-0 flex items-center justify-center flex-col bg-black/70 z-40 p-2'>
						<motion.div
							className='flex items-center justify-center flex-col z-50'
							layoutId={urls[selectedIndex]}
						>
							<Image
								className='rounded-t-md'
								alt='Imagem gerada'
								src={selectedUrl}
								width={512}
								height={512}
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2, type: 'tween' }}
							className='w-full max-w-[512px] bg-gray-900 rounded-b-md flex flex-col sm:flex-row items-center justify-center gap-2 p-2'
						>
							<a
								className={buttonVariants({ variant: 'secondary', className: 'w-full flex items-center justify-center gap-2 z-40' })}
								href={selectedUrl}
								download={true}
								target='_blank'
							>
								<Download className='h-5 w-5' />
								<p className='text-sm'>
									Download
								</p>
							</a>
							<Button
								disabled={loading}
								onClick={e => saveImage(e)}
								className='w-full flex items-center justify-center gap-2'
								variant='secondary'
							>
								<Save className='h-5 w-5' />
								<p className='text-sm'>
									Salvar
								</p>
							</Button>
							<Button
								disabled={loading}
								className='w-full flex items-center justify-center gap-2'
								variant='secondary'
							>
								<PenLine className='h-5 w-5' />
								<p className='text-sm'>
									Decalque
								</p>
							</Button>
						</motion.div>
					</motion.div>
				</AnimatePresence>
			)}
		</div>
	)
}
