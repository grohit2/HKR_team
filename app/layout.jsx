import './globals.css';

export const metadata = {
  title: 'HKR Team',
  description: 'HKR Team application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
