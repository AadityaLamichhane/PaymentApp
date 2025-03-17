import "./globals.css";
import "@repo/ui/styles.css";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>
          <div className="min-w-screen min-h-screen bg-[#ebe6e6]">
            {children}
          </div>
        </body>
      </Providers>
      
    </html>
  );
}
