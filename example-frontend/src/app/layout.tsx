// app/layout.tsx
import type { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "Next.js and FastAPI Example",
  description: "A template application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}