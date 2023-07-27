'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
	href: string;
	children: React.ReactNode;
}

export function NavLink({ children, href }: Props) {
	const pathName = usePathname();

	return (
		<Link
			data-active={pathName === href}
			className={`text-xs uppercase font-semibold transition-colors duration-200 ease-in-out p-2 rounded-md hover:bg-zinc-100 text-zinc-950
			${pathName === href && 'bg-zinc-100'}`}
			href={href}
		>
			{children}
		</Link>
	)
}

