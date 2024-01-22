import { IListApiPops } from "@/interface";
import {
  fetchPockemonsList,
  isPokemonListLoading,
  getPokemonList,
  getPokemonTotalCount,
  getPage,
  getPageSize,
  getPokemonFullList,
} from "@/store/pokemonListSlice";
import { AppDispatch, AppStore, wrapper } from "@/store/store";
import { DataGridTable } from "@pokedex-monorepo/components";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/components/Loading/Loading";
import { POKEMON_COLUMN } from "@/constants";

export default function Pokemon() {
  const dispatch = useDispatch() as AppDispatch;
  const pokemons = useSelector(getPokemonList);
  const fullList = useSelector(getPokemonFullList);
  const totalCount = useSelector(getPokemonTotalCount);
  const isLoading = useSelector(isPokemonListLoading);
  const page = useSelector(getPage);
  const pageSize = useSelector(getPageSize);

  const onPageChange = async (value: IListApiPops) => {
    dispatch(
      fetchPockemonsList({ page: value.page + 1, pageSize: value.pageSize })
    );
  };

  if (isLoading && !fullList) {
    return <Loading />;
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
}

export const getServerSideProps = wrapper.getServerSideProps(
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
  }
);
