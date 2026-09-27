"use client";

import { usePathname } from "next/navigation";
import { Box } from "@mui/material";

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname?.includes("/auth");

  return (
    <Box
      component="main"
      sx={{
        pt: isAuthPage ? 0 : { xs: "56px", sm: "64px" },
        width: "100%",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {children}
    </Box>
  );
}
