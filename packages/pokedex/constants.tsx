import { GridColDef } from "@mui/x-data-grid";
import Link from "next/link";

export const POKEMON_COLUMN: GridColDef[] = [
  {
    field: "name",
    headerName: "Pokemon Name",
    align: "left",
    headerAlign: "left",
    flex: 2,
    sortable: false,
    hideable: false,
    headerClassName: "super-app-theme--header",
    renderHeader: () => {
      return <div style={{ paddingLeft: "20px" }}>Pokemon Name</div>;
    },
    renderCell: (params) => {
      return (
        <div style={{ paddingLeft: "20px" }}>
          <Link
            href={`/${params.value}`}
            style={{ textTransform: "capitalize" }}
          >
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
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    sortable: false,
    hideable: false,
    renderHeader: () => {
      return "Orignal Link";
    },
    renderCell: (params) => {
      return (
        <a href={params?.value} target="_blank">
          Link
        </a>
      );
    },
  },
];
