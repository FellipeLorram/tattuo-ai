'use client';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { GenerateImageFormType, generateImageSchema } from '@/lib/generateImageForm';
import { Input } from '../ui/input';
import { CircleDashed, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const quantityOptions = [
	{
		value: "1",
		label: "1 Foto"
	},
	{
		value: "2",
		label: "2 Fotos"
	},
	{
		value: "3",
		label: "3 Fotos"
	},
	{
		value: "4",
		label: "4 Fotos"
	},
];

const resolutionOptions = [
	{
		value: "256x256",
		label: "256x256",
	},
	{
		value: "512x512",
		label: "512x512",
	},
	{
		value: "1024x1024",
		label: "1024x1024",
	},
];

interface Props {
	onSubmit: (data: GenerateImageFormType) => void;
}

export function GenerateImageForm({ onSubmit }: Props) {
	const form = useForm({
		resolver: zodResolver(generateImageSchema),
		defaultValues: {
			prompt: '',
			quantity: '1',
			resolution: '512x512',
		},
	});


	async function handleSubmit(data: GenerateImageFormType) {
		await onSubmit(data);
		form.setValue('prompt', '');
	}

	return (
		<Form {...form}>
			<form
				className='flex w-full max-w-[800px] items-center justify-center flex-col md:flex-row gap-2 p-2'
				onSubmit={form.handleSubmit(handleSubmit)}
			>
				<FormField
					control={form.control}
					name="prompt"
					render={({ field }) => (
						<FormItem
							className='flex-1 w-full md:w-fit'
						>
							<FormControl>
								<Input
									autoComplete="off"
									disabled={form.formState.isSubmitting}
									placeholder="A lion with a crown on its head."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="quantity"
					render={({ field }) => (
						<FormItem
							className='w-full md:w-fit'
						>
							<Select
								disabled={form.formState.isSubmitting}
								onValueChange={field.onChange}
								value={field.value.toString()}
								defaultValue={field.value.toString()}
							>
								<FormControl>
									<SelectTrigger

									>
										<SelectValue defaultValue={field.value} />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{quantityOptions.map((option) => (
										<SelectItem
											
											key={option.value}
											value={option.value}
										>
											{option.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="resolution"
					render={({ field }) => (
						<FormItem
						className='w-full md:w-fit'
						>
							<Select
								disabled={form.formState.isSubmitting}
								onValueChange={field.onChange}
								value={field.value}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger>
										<SelectValue defaultValue={field.value} />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{resolutionOptions.map((option) => (
										<SelectItem
											key={option.value}
											value={option.value}
										>
											{option.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>

				<Button
					className=' w-full md:w-fit gap-2'
					type="submit"
					disabled={form.formState.isSubmitting}
				>
					{form.formState.isSubmitting && (
						<>
							<CircleDashed className='animate-spin mr-2 stroke-slate-400' strokeWidth={2} size={20} />
						</>
					)}

					<Send
						className='stroke-gray-900'
						size={20}
					/>
					<p className='md:w-fit md:hidden text-gray-900'>
						Criar
					</p>
				</Button>
			</form>
		</Form>
	)
}
