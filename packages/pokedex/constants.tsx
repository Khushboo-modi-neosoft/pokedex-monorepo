import { GridColDef } from "@mui/x-data-grid";

export const POKEMON_COLUMN: GridColDef[] = [
  {
    field: "name",
    headerName: "Pokemon Name",
    headerClassName: "row-header",
    align: "left",
    headerAlign: "center",
    flex: 2,
  },
  {
    field: "url",
    flex: 2,
    align: "left",
    headerAlign: "center",
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