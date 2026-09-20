"use client";

import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { theme } from "@/lib/theme";
import { queryClient } from "@/lib/queryClient";
import createEmotionCache from "@/lib/emotionCache";
import { CacheProvider } from "@emotion/react";
const clientSideEmotionCache = createEmotionCache();

export default function ThemeProviderWrapper({
  children,
  messages,
}: {
  children: ReactNode;
  messages: Record<string, string>;
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <NextIntlClientProvider messages={messages} locale="hi">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ThemeProvider>
      </NextIntlClientProvider>
    </CacheProvider>
  );
}
