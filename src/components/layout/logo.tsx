import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ weight: ['400'], subsets: ['latin-ext'] });


export function Logo() {
	return (
		<h1 className={`${staatliches.className} text-xl`}>
			TATTUO.AI
		</h1>
	)
}
