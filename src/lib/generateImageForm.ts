import { z } from "zod";

export const generateImageSchema = z.object({
	prompt: z.string().min(3, { message: 'No minimo 3 caracteres' }),
	quantity: z.string().min(1, { message: 'No minimo 1' }),
	resolution: z.string(),
});

export type GenerateImageFormType = z.infer<typeof generateImageSchema>;
