import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import "./globals.css";
import "@repo/ui/styles.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
