
import "./globals.css";
import "@repo/ui/styles.css";
import { Providers } from "../provider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>{children}</body>
      </Providers>
      
    </html>
  );
}
