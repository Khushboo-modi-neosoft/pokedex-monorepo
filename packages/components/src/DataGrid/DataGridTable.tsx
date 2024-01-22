import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IDataGridProps, TRowData } from "./DataGridTable.types";
import * as styles from "./DataGridTable.styles";
import { Box } from "@mui/material";

const DataGridTable = ({
  rows,
  column,
  pagination,
  totalCount,
  onPageChange,
  isLoading = false,
  getRowId,
  disableColumnMenu = true,
  disableColumnFilter = true,
}: IDataGridProps) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.tableWrapper}>
        <DataGrid
          rows={rows}
          columns={column}
          paginationMode="server"
          paginationModel={pagination}
          rowCount={totalCount}
          onPaginationModelChange={onPageChange}
          getRowId={(row: TRowData) => getRowId(row)}
          loading={isLoading}
          disableColumnFilter={disableColumnFilter}
          disableColumnMenu={disableColumnMenu}
          sx={{
            boxShadow: 2,
            borderRadius: "10px",
            "& .super-app-theme--header": {
              backgroundColor: "rgba(139, 135, 142, 0.55)",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default DataGridTable;
