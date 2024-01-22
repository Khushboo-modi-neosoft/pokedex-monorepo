import { GridColDef, GridPaginationModel } from "@mui/x-data-grid";
export type TRowData = { name: string; url: string };

export interface IDataGridProps {
	rows: TRowData[];
	column: GridColDef[];
	pagination: { page: number, pageSize: number };
	onPageChange: (data: GridPaginationModel) => void;
	isLoading: boolean;
	totalCount: number;
	getRowId: (row: TRowData) => string | number;
	disableColumnFilter?: boolean;
	disableColumnMenu?: boolean
}