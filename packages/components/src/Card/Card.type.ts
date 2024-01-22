export interface ICardProps {
	pokemonData: {
		id: number;
		name: string;
		height?: number;
		weight?: number;
		base_experience?: number;
		order: number;
		stats?: {
			base_stat: number | string;
			stat: {
				name: string;
			};
		}[];
		sprites?: {
			other: { dream_world: { front_default: string } };
		};
		types: {
			slot: number;
			type: {
				name: string;
			};
		}[];
	}
}