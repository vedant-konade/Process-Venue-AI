import "./globals.css";
import { AppProvider } from "../context/AppContext";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import ModelPanel from "../components/layout/ModelPanel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <div className="grid grid-cols-[260px_1fr_320px] h-screen">
            <Sidebar />
            <div className="flex flex-col">
              <Header />
              <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
                {children}
              </main>
            </div>
            <ModelPanel />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
