'use client';

import { motion } from 'framer-motion';
import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { GenerateImageForm } from "@/components/form/generateImageForm";
import { GenerateImageFormType } from '@/lib/generateImageForm';
import { Loading } from '@/components/layout/Loading';
import { HandTattooAnimation } from '@/components/layout/handTattooAnimation';
import { GeneratedImageGrid } from '@/components/layout/generatedImageGrid';

export default function Page() {
  const router = useRouter();
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
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

        {loading ?
          <Loading />
          : (
            <>
              {imagesUrl.length > 0 ? <GeneratedImageGrid urls={imagesUrl} /> : <HandTattooAnimation />}
            </>
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
