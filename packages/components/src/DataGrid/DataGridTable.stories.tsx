import React from "react";
import DataGridTable from "./DataGridTable";
import { gridMockProps } from "../mockData";

export default {
  component: <DataGridTable {...gridMockProps} />,
  title: "DataGrid",
};

export const Default = {
  render: () => {
    return <DataGridTable {...gridMockProps} />;
  },
};
