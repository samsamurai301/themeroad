'use client';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from './ThemeContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0 }}>
      <body style={{ margin: 0, padding: 0 }}>
        <Provider store={store}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
