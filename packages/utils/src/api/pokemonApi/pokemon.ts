import {
  IListParams,
  IPokemonData,
  IPokemonListResponse,
} from "../../interfaces";
import ApiClient from "../../services/ApiClient";

export const getPokemonsList = async (params: IListParams) => {
  const { page, limit } = params;
  try {
    const offset = (page - 1) * limit;
    const response = await ApiClient.get<IPokemonListResponse[]>(
      `/pokemon?offset=${offset}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getPokemonById = async (id: string | number) => {
  try {
    const reaponse = await ApiClient.get<IPokemonData>(`/pokemon/${id}`);
    return reaponse.data;
  } catch (error) {
    return error;
  }
};
