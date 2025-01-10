"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "./ThemeContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Provider store={store}>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
