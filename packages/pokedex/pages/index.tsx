import { IListApiPops } from "@/interface";
import {
	fetchPockemonsList,
	isPokemonListLoading,
	getPokemonList,
	getPokemonTotalCount,
	getPage,
	getPageSize,
	getPokemonFullList
} from "@/store/pokemonListSlice";
import { AppDispatch, AppStore, wrapper } from "@/store/store";
import { DataGridTable } from "@pokedex-monorepo/components";
import { useDispatch, useSelector } from "react-redux";
import { GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import Loading from "@/components/Loading/Loading";

export default function Pokemon() {

	const dispatch = useDispatch() as AppDispatch;
	const pokemons = useSelector(getPokemonList);
	const fullList = useSelector(getPokemonFullList);
	const totalCount = useSelector(getPokemonTotalCount);
	const isLoading = useSelector(isPokemonListLoading);
	const page = useSelector(getPage);
	const pageSize = useSelector(getPageSize);


	const POKEMON_COLUMN: GridColDef[] = [
		{
			field: "name",
			headerName: "Pokemon Name",
			align: "left",
			headerAlign: "left",
			flex: 2,
			sortable: false,
			hideable: false,
			headerClassName: 'super-app-theme--header',
			renderHeader: () => {
				return <div style={{ paddingLeft: "20px" }}>
					Pokemon Name
				</div>
			},
			renderCell: (params) => {
				return (
					<div style={{ paddingLeft: "20px" }}>
						<Link href={`/${params.value}`} style={{ textTransform: "capitalize" }}>
							{params.value}
						</Link>
					</div>
				);
			},
		},
		{
			field: "url",
			flex: 2,
			align: "center",
			headerClassName: 'super-app-theme--header',
			headerAlign: "center",
			sortable: false,
			hideable: false,
			renderHeader: () => {
				return "Orignal Link"
			},
			renderCell: (params) => {
				return (
					<a href={params?.value} target="_blank">
						Link
					</a>
				);
			},
		}
	];

	const onPageChange = async (value: IListApiPops) => {
		dispatch(fetchPockemonsList({ page: value.page + 1, pageSize: value.pageSize }));
	};

	if (isLoading && !fullList) {
		return <Loading />
	}

	return (
		<DataGridTable
			rows={pokemons}
			column={POKEMON_COLUMN}
			totalCount={totalCount}
			isLoading={isLoading}
			pagination={{ page: page - 1, pageSize }}
			onPageChange={onPageChange}
			getRowId={(e) => e.name}
		/>
	);
};

export const getServerSideProps =
	wrapper.getServerSideProps(
		(store: AppStore) => async () => {
			try {
				const page = store.getState().pokemonsList.currentPage;
				const pageSize = store.getState().pokemonsList.perPage;
				await store.dispatch(fetchPockemonsList({ page, pageSize }));
			} catch (error) {
				console.log({ error });
			}
			return {
				props: {},
			};
		});
