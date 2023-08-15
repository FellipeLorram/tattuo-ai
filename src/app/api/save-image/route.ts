import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { supabase } from '@/lib/storage';
import axios from 'axios';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function POST(
	req: Request,
) {
	try {
		const body = await req.json();

		const bodySchema = z.object({
			imageUrl: z.string(),
			prompt: z.string(),
		});

		const { imageUrl, prompt } = bodySchema.parse(body);

		const session = await getAuthSession()

		if (!session?.user) {
			return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
		}

		const isImageAlreadySaved = await db.savedImagesUrl.findFirst({
			where: {
				id: imageUrl,
			},
		});

		if (isImageAlreadySaved) {
			return NextResponse.json({ message: 'Image already saved' }, {
				status: 400,
			})
		}

		const imageResponse = await fetch(imageUrl);
		const imageBuffer = await imageResponse.arrayBuffer();

		const path = `${session?.user.id}/${imageUrl}.png`;

		const { error: uploadError, data } = await supabase.storage.from('saved-images').upload(path, imageBuffer);

		if (uploadError) {
			console.log(uploadError);
			return NextResponse.json({ message: 'Internal Error' }, {
				status: 500,
			});
		}

		await db.savedImagesUrl.create({
			data: {
				id: imageUrl,
				url: data.path,
				userId: session?.user.id,
				prompt,
			},
		});


		return NextResponse.json({ message: 'Image saved successfully' });

	} catch (error: any) {
		console.log(error.message);
		console.log(error);
		return NextResponse.json({ message: 'Internal Error' }, {
			status: 500,
		});
	}
}
