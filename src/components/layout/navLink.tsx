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
			className={` whitespace-nowrap border-b pb-4 pt-2 leading-none text-gray-50 transition px-4 ${pathName === href ? 'border-indigo-600 font-semibold' : ' border-transparent hover:border-gray-600'}`}
			href={href}
		>
			{children}
		</Link>
	)
}

