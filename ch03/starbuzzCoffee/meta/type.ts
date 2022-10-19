export const SizeEnum = {
	Tall: 'Tall',
	Grande: 'Grande',
	Venti: 'Venti',
} as const
export type Size = keyof typeof SizeEnum
