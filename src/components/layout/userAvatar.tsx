'use client';
import { User } from 'next-auth';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { signOut } from 'next-auth/react';

interface UserAvatarProps {
	user?: Pick<User, 'name' | 'image'>;
}

export async function UserAvatar({ user }: UserAvatarProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar className='border border-indigo-600'>
					<AvatarImage src={user?.image || undefined} />
					<AvatarFallback className='font-semibold'>
						{user?.name?.split(' ').map((name) => name[0])}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='shadow-md shadow-black'>
				<DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Cobrança</DropdownMenuItem>
				<DropdownMenuItem>Inscrição</DropdownMenuItem>
				<DropdownMenuItem
					onClick={(event) => {
						event.preventDefault()
						signOut({
							callbackUrl: `${window.location.origin}/sign-in`,
						})
					}}>
					Sair
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
