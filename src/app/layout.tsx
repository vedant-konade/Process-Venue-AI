import "./globals.css";
import { AppProvider } from "../context/AppContext";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import ModelPanel from "../components/layout/ModelPanel";
import "@fontsource-variable/inter";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0b1112] antialiased text-gray-200">
        {children}
      </body>
    </html>
  );
}
