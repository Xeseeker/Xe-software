export const metadata = {
  title: "XE Software - Frontend",
  description: "Next.js Frontend connected with Backend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
