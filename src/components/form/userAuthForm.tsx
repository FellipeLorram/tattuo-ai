'use client';

import { useState } from "react";
import { signIn } from 'next-auth/react'
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

export function UserAuthForm() {
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();

	async function loginWithGoogle() {
		setLoading(true);
		try {
			await signIn('google');
		} catch (error) {
			console.log(error);
			toast({
				title: 'Erro',
				description: 'Houve um erro ao tentar fazer login com o Google',
				variant: 'destructive',
			});

		} finally {
			setLoading(false);
		}
	}

	return (
		<Button
			disabled={loading}
			onClick={loginWithGoogle}
			className="w-full"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				fill="none"
				stroke="#111111"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path stroke="none" d="M0 0h24v24H0z"></path>
				<path d="M17.788 5.108A9 9 0 1021 12h-8"></path>
			</svg>
			<span className='ml-2 text-gray-900 text-lg'>Google</span>
		</Button>
	)
}
