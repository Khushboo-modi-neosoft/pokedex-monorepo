import React from "react";
import { useSelector } from "react-redux";
import { AppStore, wrapper } from "../store/store";
import {
	fetchPokemonData,
	getLoadingState,
	getPokemonData
} from "../store/pokemonDataSlice";
import { IPokemonData } from "@pokedex-monorepo/utils";
import { GetServerSideProps } from "next";
import { Card } from "@pokedex-monorepo/components"
import Loading from "@/components/Loading/Loading";

const PokemonDetails = () => {
	const pokemonData: IPokemonData | null = useSelector(getPokemonData);
	const isLoading: boolean = useSelector(getLoadingState);

	if (isLoading) {
		return <Loading />
	}

	if (!pokemonData) {
		return '';
	}

	return (
		<Card pokemonData={pokemonData} />
	);
};
export default PokemonDetails;

export const getServerSideProps: GetServerSideProps =
	wrapper.getServerSideProps(
		(store: AppStore) => async (context) => {
			if (!!context?.params?.name) {
				await store.dispatch(fetchPokemonData(context.params.name as string));
			}
			return {
				props: {},
			};
		});
