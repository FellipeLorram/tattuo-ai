import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ weight: ['400'], subsets: ['latin-ext'] });

export function Logo() {
	return (
		<div className="flex flex-row items-center justify-center gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="none"
				viewBox="0 0 32 32"
			>
				<g clipPath="url(#clip0_219_3)">
					<rect width="32" height="32" fill="#FAFAFA" rx="16"></rect>
					<circle cx="16" cy="16" r="16" fill="#fff"></circle>
					<path
						fill="#111"
						d="M5.444 19c-.027 0-.04-.017-.04-.05v-5.7h-1.3c-.033 0-.05-.017-.05-.05l.01-1.12c0-.027.013-.04.04-.04h3.8c.033 0 .05.013.05.04v1.12c0 .033-.013.05-.04.05h-1.31l.01 5.7c0 .033-.013.05-.04.05h-1.13zm2.205-.05l1.24-6.87c.007-.027.023-.04.05-.04h1.45c.027 0 .043.013.05.04l1.19 6.87c.007.033-.007.05-.04.05h-1.11c-.027 0-.043-.017-.05-.05l-.11-.73H8.96l-.11.73c-.007.033-.023.05-.05.05H7.69c-.027 0-.04-.017-.04-.05zm1.51-1.8h.96l-.41-2.81-.06-.37-.04.37-.45 2.81zM12.78 19c-.027 0-.04-.017-.04-.05v-5.7h-1.3c-.034 0-.05-.017-.05-.05l.01-1.12c0-.027.013-.04.04-.04h3.8c.032 0 .05.013.05.04v1.12c0 .033-.014.05-.04.05h-1.31l.01 5.7c0 .033-.014.05-.04.05h-1.13zm4.003 0c-.027 0-.04-.017-.04-.05v-5.7h-1.3c-.033 0-.05-.017-.05-.05l.01-1.12c0-.027.013-.04.04-.04h3.8c.033 0 .05.013.05.04v1.12c0 .033-.013.05-.04.05h-1.31l.01 5.7c0 .033-.013.05-.04.05h-1.13zm4.844.1c-.353 0-.68-.09-.98-.27-.3-.187-.54-.433-.72-.74a2.018 2.018 0 01-.26-1.01l.02-5c0-.027.013-.04.04-.04h1.12c.027 0 .04.013.04.04v5c0 .227.07.42.21.58.147.153.323.23.53.23.213 0 .39-.077.53-.23a.828.828 0 00.22-.58v-5c0-.027.013-.04.04-.04h1.12c.027 0 .04.013.04.04l.02 5c0 .373-.09.713-.27 1.02-.173.307-.41.55-.71.73-.293.18-.623.27-.99.27zm4.61 0c-.36 0-.69-.09-.99-.27a2.188 2.188 0 01-.71-.73 1.96 1.96 0 01-.27-1.01l.01-3.17c0-.367.086-.7.26-1 .18-.3.42-.54.72-.72.3-.18.626-.27.98-.27.36 0 .686.09.98.27.293.18.526.42.7.72.18.3.27.633.27 1l.01 3.17c0 .367-.09.703-.27 1.01-.174.3-.41.543-.71.73-.294.18-.62.27-.98.27zm0-1.21c.2 0 .373-.08.52-.24a.807.807 0 00.23-.56l-.01-3.17a.8.8 0 00-.21-.56.687.687 0 00-.53-.23.707.707 0 00-.53.23.759.759 0 00-.22.56v3.17c0 .22.073.41.22.57.146.153.323.23.53.23z"
					></path>
					<path
						stroke="#111"
						strokeWidth="2"
						d="M-9.072 25.348l63.65-6.69"
					></path>
					<path
						stroke="#111"
						strokeWidth="3"
						d="M4.989 30.67l17.022-3.618"
					></path>
				</g>
				<defs>
					<clipPath id="clip0_219_3">
						<rect width="32" height="32" fill="#fff" rx="16"></rect>
					</clipPath>
				</defs>
			</svg>
			<h1
				className={`${staatliches.className} text-gray-50 text-2xl`}
			>
				TATTUO.AI
			</h1>
		</div>
	);
}
