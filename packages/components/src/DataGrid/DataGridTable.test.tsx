import React from "react";
import { render } from "@testing-library/react";
import DataGridTable from "./DataGridTable";
import { mockRows, mockColumns } from "../mockData";

const mockPagination = {
  pageSize: 10,
  page: 1,
};

const mockGetRowId = (row) => row.name;

const mockOnPageChange = jest.fn();

const mockDataGridProps = {
  rows: mockRows,
  column: mockColumns,
  pagination: mockPagination,
  totalCount: mockRows.length,
  onPageChange: mockOnPageChange,
  getRowId: mockGetRowId,
  isLoading: false,
  disableColumnMenu: true,
  disableColumnFilter: true,
};

describe("DataGridTable component", () => {
  it("renders without crashing", () => {
    render(<DataGridTable {...mockDataGridProps} />);
  });

  it("calls onPageChange when pagination model changes", () => {
    const { getByRole } = render(<DataGridTable {...mockDataGridProps} />);
    const nextPageButton = getByRole("button", { name: "Go to next page" });
    nextPageButton.click();
    expect(mockOnPageChange).toHaveBeenCalled();
  });

  it("disables column menu when disableColumnMenu prop is true", () => {
    const { container } = render(<DataGridTable {...mockDataGridProps} />);
    const columnMenuButton = container.querySelector(".MuiDataGrid-menuIcon");
    expect(columnMenuButton).toBeNull();
  });

  it("disables column filter when disableColumnFilter prop is true", () => {
    const { container } = render(<DataGridTable {...mockDataGridProps} />);
    const columnFilterInput = container.querySelector(
      ".MuiDataGrid-columnHeaderFilterInput"
    );
    expect(columnFilterInput).toBeNull();
  });
});
