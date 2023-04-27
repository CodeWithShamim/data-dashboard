import "@/styles/globals.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import lightTheme from "@/themes/lightTheme";
import darkTheme from "@/themes/darkTheme";

export const colorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((preMode) => {
          const newMode = preMode === "light" ? "dark" : "light";
          localStorage.setItem("theme", newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const darkThemeSelect = React.useMemo(
    () =>
      createTheme({
        ...darkTheme,
      }),
    [mode]
  );
  const lightThemeSelect = React.useMemo(
    () =>
      createTheme({
        ...lightTheme,
      }),
    [mode]
  );

  useEffect(() => {
    const localMode = localStorage.getItem("theme");
    localMode && setMode(localMode === "dark" ? "dark" : "light");
  }, []);

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider
        theme={mode === "dark" ? darkThemeSelect : lightThemeSelect}
      >
        <SessionProvider session={session}>
          <CssBaseline />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}
