import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sight Admin",
  description: "Admin portal for managing financial products and providers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <aside className="w-64 bg-gray-900 text-white p-4">
            <h1 className="text-xl font-bold mb-8">Sight Admin</h1>
            <nav className="space-y-2">
              <a href="/" className="block px-3 py-2 rounded hover:bg-gray-800">
                Dashboard
              </a>
              <a href="/providers" className="block px-3 py-2 rounded hover:bg-gray-800">
                Providers
              </a>
              <a href="/products" className="block px-3 py-2 rounded hover:bg-gray-800">
                Products
              </a>
              <a href="/waitlist" className="block px-3 py-2 rounded hover:bg-gray-800">
                Waitlist
              </a>
            </nav>
          </aside>
          <main className="flex-1 p-8 bg-gray-50">{children}</main>
        </div>
      </body>
    </html>
  );
}
