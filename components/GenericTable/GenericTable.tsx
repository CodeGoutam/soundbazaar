"use client";

import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Skeleton,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// --- Types ---
export interface Column<T> {
  id: string;
  label: string;
  width?: string;
  align?: "left" | "center" | "right";
  render: (item: T) => React.ReactNode;
}

interface GenericTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  mobileRenderer: (item: T) => React.ReactNode;
  emptyMessage?: string;
  emptySubMessage?: string;
}

// --- Shared Styles ---
const HEAD_CELL_SX = {
  fontSize: "0.64rem",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: "#B0AAA3",
  bgcolor: "#F5F3EF",
  borderBottom: "1px solid #E8E4DE",
  py: "0.7rem",
  whiteSpace: "nowrap" as const,
};

const BODY_CELL_SX = {
  fontSize: "0.86rem",
  color: "#18181B",
  borderBottom: "1px solid #F0EDE8",
  py: "0.95rem",
  verticalAlign: "middle" as const,
};

export default function GenericTable<T extends { id: string | number }>({
  data,
  columns,
  loading,
  mobileRenderer,
  emptyMessage = "No data found",
  emptySubMessage,
}: GenericTableProps<T>) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Mobile View
  if (isMobile) {
    return (
      <Box>
        {loading ? (
          [1, 2, 3].map((i) => (
            <Paper key={i} sx={{ p: 2, mb: 1, border: "1px solid #E8E4DE" }}>
              <Skeleton width="60%" height={24} />
              <Skeleton width="40%" height={16} />
            </Paper>
          ))
        ) : data.length === 0 ? (
          <EmptyState message={emptyMessage} sub={emptySubMessage} />
        ) : (
          data.map((item) => <Box key={item.id}>{mobileRenderer(item)}</Box>)
        )}
      </Box>
    );
  }

  // Desktop View
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        border: "1px solid #E8E4DE",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Table sx={{ tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.id}
                sx={{
                  ...HEAD_CELL_SX,
                  width: col.width,
                  textAlign: col.align || "left",
                }}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            [1, 2, 3].map((i) => (
              <TableRow key={i}>
                {columns.map((_, j) => (
                  <TableCell key={j} sx={BODY_CELL_SX}>
                    <Skeleton />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} sx={{ border: "none" }}>
                <EmptyState message={emptyMessage} sub={emptySubMessage} />
              </TableCell>
            </TableRow>
          ) : (
            data.map((item) => (
              <TableRow
                key={item.id}
                hover
                sx={{ "&:hover": { bgcolor: "#F9F7F4" } }}
              >
                {columns.map((col) => (
                  <TableCell
                    key={col.id}
                    sx={{ ...BODY_CELL_SX, textAlign: col.align || "left" }}
                  >
                    {col.render(item)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function EmptyState({ message, sub }: { message: string; sub?: string }) {
  return (
    <Box sx={{ textAlign: "center", py: "4rem" }}>
      <Typography
        sx={{
          fontFamily: "Fraunces, serif",
          fontWeight: 700,
          color: "#18181B",
        }}
      >
        {message}
      </Typography>
      {sub && (
        <Typography sx={{ fontSize: "0.82rem", color: "#B0AAA3" }}>
          {sub}
        </Typography>
      )}
    </Box>
  );
}
