import { generateImageSchema } from '@/lib/generateImageForm';
import { NextResponse } from 'next/server';
import { OpenAIApi, Configuration, CreateImageRequest } from 'openai';

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(
	req: Request,
) {
	try {
		const body = await req.json();
		const { prompt, quantity, resolution } = generateImageSchema.parse(body);

		const { data } = await openai.createImage({
			prompt: prompt,
			n: parseInt(quantity, 10),
			size: resolution as CreateImageRequest['size'],
		});
		
		const urls = data.data.map(item => item.url);

		return NextResponse.json(urls);

	} catch (error: any) {
		console.log(error.message);
		console.log(error);
		return new NextResponse('Internal Error', {
			status: 500,
		});
	}
}
