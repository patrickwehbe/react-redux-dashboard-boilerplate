import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function DataGridDemo({ height, width, rows, columns, rowClick }) {
  return (
    <Box sx={{ height: height, width: width }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        onRowClick={rowClick}
      />
    </Box>
  );
}
