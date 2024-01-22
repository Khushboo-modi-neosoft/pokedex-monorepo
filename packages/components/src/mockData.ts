import { GridColDef } from "@mui/x-data-grid";
import { IDataGridProps } from "./DataGrid/DataGridTable.types"

export const mockPokemonData = {
  id: 39,
  name: "jigglypuff",
  height: 5,
  weight: 55,
  base_experience: 95,
  order: 71,
  stats: [
    {
      base_stat: 115,
      stat: {
        name: 'hp'
      }
    },
    {
      base_stat: 45,
      stat: {
        name: 'attack'
      }
    },
    {
      base_stat: 20,
      stat: {
        name: 'defense'
      }
    },
    {
      base_stat: 45,
      stat: {
        name: 'special-attack'
      }
    },
    {
      base_stat: 25,
      stat: {
        name: 'special-defense'
      }
    },
    {
      base_stat: 20,
      stat: {
        name: 'speed'
      }
    }
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'normal',
      }
    },
    {
      slot: 2,
      type: {
        name: 'fairy',
      }
    }
  ],
  sprites: {
    other: {
      dream_world: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg',
      }
    }
  }
};

export const mockRows = [
  { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/bulbasaur" },
  { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/venusaur" },
  { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/charmeleon" },
  { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/charmander" },
  { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/squirtle" },
];

export const mockColumns = [
  {
    field: "name",
    headerName: "Pokemon Name",
    headerClassName: "row-header",
    align: "left",
    headerAlign: "left",
    flex: 2,
    sortable: false,
    hideable: false
  },
  {
    field: "url",
    flex: 2,
    align: "center",
    headerAlign: "center",
    sortable: false,
    hideable: false,
    renderHeader: () => {
      return "Orignal Link"
    }
  }
] as GridColDef[];

export const gridMockProps: IDataGridProps = {
  rows: mockRows,
  column: mockColumns,
  pagination: { page: 1, pageSize: 10 },
  isLoading: false,
  totalCount: 5,
  onPageChange: () => { },
  getRowId: (row) => row.name,
}