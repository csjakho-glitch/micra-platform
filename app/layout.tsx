import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MICRA Platform OS',
  description: 'Regenerative Aquaculture Operating System',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
