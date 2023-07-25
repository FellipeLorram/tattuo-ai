'use client';

import Lottie from 'lottie-react';
import { GenerateImageForm } from "@/components/form/generateImageForm";
import HandTattoo from '@/assets/animations/hand-tattuo.json';
import { motion } from 'framer-motion';
import { GenerateImageFormType } from '@/lib/generateImageForm';
import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [imagesUrl, setImagesUrl] = useState<String[]>([]);
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: GenerateImageFormType) {
    try {
      setLoading(true);
      const { data } = await axios.post<string[]>('/api/image', formData);
      setImagesUrl(data);
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-1 w-full items-center justify-center flex-col p-4">
      <div className="flex-1 w-full flex items-center justify-center">

        {imagesUrl.length > 0 ? (
          <div
            className='grid grid-cols-2 grid-rows-2 gap-2'
          >
            {imagesUrl.map((url, index) => (
              <Image
                key={index}
                className='rounded-md w-32 h-32 md:w-48 md:h-48'
                alt='Imagem gerada'
                src={url.toString()}
                width={512}
                height={512}
              />
            ))}
          </div>
        ) : (
          <motion.div
            className='flex flex-col items-center justify-center gap-2'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >

            <Lottie
              className='w-32 h-32 md:w-60 md:h-60'
              loop={false}
              animationData={HandTattoo}
            />
            <p
              className='text-sm text-zinc-700'
            >
              Comece a criar sua Arte.
            </p>
          </motion.div>
        )}

      </div>

      <motion.div
        className='w-full flex items-center justify-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <GenerateImageForm
          onSubmit={onSubmit}
        />
      </motion.div>

    </main>
  )
}
