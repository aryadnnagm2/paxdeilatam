export const metadata = {
  title: "Pax Dei Latam",
  description: "Comunidad Latina de Pax Dei",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
