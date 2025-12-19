// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Sidebar from "../components/layout/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <ThemeProvider>
<div className="pv-app">
  <Sidebar />
  <main className="pv-main">
    {children}
  </main>
</div>



        </ThemeProvider>
      </body>
    </html>
  );
}
